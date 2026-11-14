# Deploying csrushil.com (Vercel)

The live site, **https://www.csrushil.com**, is served by **Vercel**: responses carry `Server: Vercel` and `X-Vercel-Cache`. Vercel builds and deploys the **`master`** branch of the GitHub repository `itzperi/seoaeogeo`.

> `.cpanel.yml` and the old GoDaddy cPanel instructions are legacy. The site does not run on cPanel. Keep `.cpanel.yml` only if you plan to move hosting.

## How a change goes live

1. Work on a branch, then verify:
   - type-check;
   - ESLint;
   - `node --test scripts/content-reviews.test.mjs`.

   Low-RAM machines: don't run `next build` locally (see the README / SEO prompts for the D: temp-tsconfig method).
2. Merge or fast-forward the branch into `master` and push:
   ```bash
   git push origin <branch>:master
   ```
3. Vercel starts a production build automatically for every push to `master`.
4. **Confirm the deploy**. Vercel does **not** post commit statuses or deployments to GitHub for this project, so GitHub shows nothing. Check either:
   - **Vercel dashboard → the project → Deployments.** The newest entry should show the pushed commit with status **Ready** and the **Production** label;
   - **the live site.** Fetch a page whose content changed and compare:
     ```bash
     curl -s https://www.csrushil.com/direct-tax | grep -o '<title>[^<]*'
     ```

## If a push does not go live

| What the Vercel Deployments page shows | Cause | Fix |
|---|---|---|
| No deployment for the commit | The Git integration is disconnected or paused, or the production branch is set to something other than `master` | Project → Settings → Git: reconnect `itzperi/seoaeogeo` and set the production branch to `master`. Then Deployments → latest → **Redeploy** |
| **Error** | Build failed | Open the deployment → Build Logs. Fix the error on a branch, verify, push again |
| **Ready**, but not on the domain | Built as a preview, or production promotion is manual | Deployment → **Promote to Production** |
| **Queued / Building** for a long time | Build queue or concurrency limit | Wait, or cancel older builds |

Known build note:
- `npm run build` with Turbopack once failed in a sandbox on the Google Fonts resolver.
- `npm run build -- --webpack` passed.
- If Vercel's build fails with a `next/font/google` error, set the build command to `next build --webpack` in Project → Settings → Build & Development.

## After every production deploy

1. Spot-check:
   - `/`, `/direct-tax`, `/private-limited-company-incorporation-chennai`;
   - one new blog post;
   - one redirect (e.g. `/ca-fees-chennai` should 308 to `/blog/how-to-choose-a-chartered-accountant-in-chennai`).
2. Search Console:
   - resubmit `https://www.csrushil.com/sitemap.xml`;
   - request indexing for new or substantially changed URLs.
3. Bing / IndexNow: `npm run indexnow` (submits changed URLs; run it with the owner's approval).
4. If schema changed, test a few pages in Google's Rich Results Test and the Schema Markup Validator.

## Environment variables (Vercel → Settings → Environment Variables)

| Variable | Used for |
|---|---|
| `SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_URL` | Supabase project for lead and click logging (`src/lib/supabase.ts`) |
| `SUPABASE_SECRET_KEY` (or legacy `SUPABASE_SERVICE_ROLE_KEY`) | Server-side Supabase access, including the `/admin` lead viewer |
| `ADMIN_USERNAME`, `ADMIN_PASSWORD` | Login for `/admin` |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (analytics loads only when set) |

Never commit secret values to the repository.
