// Pings IndexNow (Bing, Yandex, Seznam; feeds Copilot/ChatGPT search) with
// every URL in the live sitemap. Run after a deploy is live:
//   node scripts/indexnow.mjs            (all sitemap URLs)
//   node scripts/indexnow.mjs /path ...  (only these paths)
// The key file public/5a2fbe6bd9aaadc9f8d7deefdfcaf213.txt must be served at the site root.
const KEY = "5a2fbe6bd9aaadc9f8d7deefdfcaf213";
const HOST = "www.csrushil.com";

const args = process.argv.slice(2);
let urls;
if (args.length) {
  urls = args.map((p) => `https://${HOST}${p.startsWith("/") ? p : `/${p}`}`);
} else {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(0, 10000) }),
});
console.log(`IndexNow: ${res.status} for ${urls.length} URLs`);
