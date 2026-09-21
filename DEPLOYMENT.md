# Deploying to GoDaddy cPanel (Node.js App)

This repo is a Next.js app configured for `output: "standalone"`
(`next.config.ts`), which is the supported way to run Next.js under
cPanel's Node.js App feature (Phusion Passenger) — it produces a
self-contained `server.js` that Passenger runs directly, without needing
`next start` or a full `node_modules` install on the server for every
request.

## One-time setup in cPanel

1. **Software → Setup Node.js App → Create Application**
   - **Node.js version:** 20.x (LTS) — this repo requires Node ≥ 20
     (`package.json` → `engines.node`).
   - **Application mode:** Production.
   - **Application root:** pick a folder outside `public_html`, e.g.
     `nodeapp` (cPanel creates it under your home directory —
     `/home/<username>/nodeapp`).
   - **Application URL:** the domain/subdomain this should serve
     (e.g. `csrushil.com`).
   - **Application startup file:** `server.js` — this is the file
     `next build` generates inside `.next/standalone/`, which `.cpanel.yml`
     copies into the application root on every deploy.
   - Click **Create**. cPanel will show you two values you need for the
     next step:
     - **Application root** (the full path, e.g. `/home/csrushil/nodeapp`)
     - **Enter to the virtual environment** command, which contains the
       exact venv activation path (e.g.
       `/home/csrushil/nodevenv/nodeapp/20/bin/activate`).

2. **Edit `.cpanel.yml`** in this repo (already committed with
   placeholders) and replace the two `REPLACE_ME` values with the exact
   paths cPanel just showed you:
   ```yaml
   - export DEPLOYPATH=/home/<your-actual-username>/nodeapp
   - export NODE_VENV=/home/<your-actual-username>/nodevenv/nodeapp/20/bin/activate
   ```
   Commit and push that change before your first deploy — cPanel reads
   `.cpanel.yml` from the repo it pulls, not from a template.

3. **Software → Git Version Control → Create**
   - **Clone URL:** `https://github.com/itzperi/seoaeogeo.git`
   - **Repository Path:** any folder (this is just where cPanel checks out
     the git repo — separate from the Node app's Application root from
     step 1).
   - **Branch:** `master` (this repo's only branch — there is no `main`).

4. **Deploy:** in Git Version Control, open the repo, click **Pull or
   Deploy → Update from Remote**, then **Deploy HEAD Commit**. This runs
   every task in `.cpanel.yml`: installs dependencies, runs `next build`,
   and copies the standalone server + static assets + `public/` into your
   Node app's Application root.

5. **Software → Setup Node.js App → your app → Restart.** (The first
   deploy already touches `tmp/restart.txt`, which Passenger watches for
   automatically — an explicit restart from the UI is just a safety net
   the first time.)

6. Visit the Application URL and confirm the site loads.

## Every subsequent deploy

Once steps 1–3 are done, shipping a new commit is just:

```
git push origin master
```

then, in cPanel's Git Version Control UI: **Update from Remote → Deploy
HEAD Commit**. No manual file copying, no re-running `npm install`
by hand — `.cpanel.yml` does the build and copy every time.

## Things that only work correctly once this is actually deployed

- Google, your Google Business Profile, and real visitors only ever see
  whatever `csrushil.com` currently serves — every commit on GitHub is
  invisible until it's deployed. As of this writing, the live site is
  still the old pre-rebuild version, not this repo's output.
- `SITE_URL` in `src/lib/site.ts` is hardcoded to `https://csrushil.com` —
  confirm the Application URL in step 1 matches exactly (including
  `www`/non-`www`, since that affects canonical URLs and schema).

## Troubleshooting

- **"npm: command not found" during deploy** — `NODE_VENV` in
  `.cpanel.yml` doesn't match the path cPanel actually created. Re-check
  Setup Node.js App's "Enter to the virtual environment" value.
- **App shows a 503 / doesn't start** — check **Setup Node.js App → your
  app → the log file path shown there.** Usually either the Node version
  is below 20, or `server.js` isn't at the exact Application root cPanel
  expects (confirm `DEPLOYPATH` in `.cpanel.yml` matches "Application
  root" exactly, including no trailing slash mismatch).
- **Site loads but has no styling / broken images** — the `.next/static`
  or `public/` copy step in `.cpanel.yml` didn't run; check the deploy
  log in Git Version Control for which task failed.
