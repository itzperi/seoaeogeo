import { tamilFor } from "@/lib/tamil";

// Tamil summary and three voice-search questions for Tamil-speaking
// visitors. Marked lang="ta" so screen readers and search engines treat
// it as Tamil. Renders nothing for pages without Tamil content.
export default function TamilSummaryBox({ path }: { path: string }) {
  const t = tamilFor(path);
  if (!t) return null;
  return (
    <section lang="ta" aria-labelledby="tamil-summary" className="bg-paper pb-12">
      <div className="container-page">
        <div className="max-w-3xl rounded-cards border border-ash bg-fog p-6">
          <h2 id="tamil-summary" className="text-xl text-obsidian">
            தமிழில்: இந்தப் பக்கம் எதைப் பற்றியது?
          </h2>
          <p className="mt-3 leading-relaxed text-slate">{t.summary}</p>
          <dl className="mt-5 space-y-4">
            {t.qas.map((qa) => (
              <div key={qa.q}>
                <dt className="font-medium text-obsidian">{qa.q}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate">{qa.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
