import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import ts from "typescript";

// Compile the actual pure module; this also works on the project's Node 20 floor.
const source = readFileSync(new URL("../src/lib/content-reviews.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { CONTENT_REVIEWS, getContentReview } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

test("missing, unsupported or stale reviews never become professional attribution", () => {
  assert.equal(getContentReview("/missing", "2026-01-01"), undefined);
  for (const review of [
    { reviewedOn: "2026-01-01", evidence: " " },
    { reviewedOn: "2026-02-30", evidence: "example-record" },
    { reviewedOn: "2099-01-01", evidence: "example-record" },
    { reviewedOn: "2025-12-31", evidence: "example-record" },
  ]) {
    CONTENT_REVIEWS["/test"] = review;
    assert.equal(getContentReview("/test", "2026-01-01"), undefined);
  }
  delete CONTENT_REVIEWS["/test"];
});

test("a recorded review is retained only while it covers the content revision", () => {
  const review = { reviewedOn: "2026-01-02", evidence: "example-completed-signoff" };
  CONTENT_REVIEWS["/test"] = review;
  assert.deepEqual(getContentReview("/test", "2026-01-01"), review);
  assert.deepEqual(getContentReview("/test", "2026-01-02"), review);
  assert.equal(getContentReview("/test", "2026-01-03"), undefined);
  delete CONTENT_REVIEWS["/test"];
});
