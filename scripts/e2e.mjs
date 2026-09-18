import { chromium } from "playwright";
const BASE = process.env.BASE || "http://localhost:3000";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push("PAGEERROR " + e.message));
const log = (...a) => console.log(...a);

await page.goto(BASE, { waitUntil: "load" });
await page.waitForSelector("#screen-auth .auth-card", { timeout: 15000 });
await page.screenshot({ path: "/home/user/shots/next-auth.png" });
log("auth screen ok");

// Guest sign in (real Firebase anonymous auth)
const EMAIL = process.env.E2E_EMAIL || `e2e-${Date.now()}@ledgerlingo.test`, PASS = "test1234";
await page.click('.auth-tabs .tab[data-mode], .auth-tabs .tab:nth-child(2)');
await page.fill("#auth-name", "E2E Tester"); await page.fill("#auth-email", EMAIL); await page.fill("#auth-pass", PASS);
await page.click("#auth-submit");
try { await page.waitForSelector("#screen-home", { timeout: 20000 }); log("email signup+login ok", EMAIL); }
catch { log("email login FAILED:", await page.textContent("#auth-msg")); await browser.close(); process.exit(1); }
await page.waitForTimeout(800);
await page.screenshot({ path: "/home/user/shots/next-home.png", fullPage: false });
log("track buttons:", await page.$$eval(".track-btn", (b) => b.map((x) => x.innerText.replace(/\n/g, " "))));
log("units:", await page.$$eval(".unit", (u) => u.length), "open units:", await page.$$eval(".unit.open", (u) => u.length));
log("topbar:", await page.$eval(".stats", (s) => s.innerText.replace(/\n/g, " ")));

// Start first lesson
await page.click(".node.current .circle", { force: true });
await page.waitForSelector("#screen-lesson");
log("lesson url:", page.url());

// Solve using the answer key (deep-equal to legacy content) so we can complete lessons and exercise every activity type.
import fs from "node:fs";
const KEY = JSON.parse(fs.readFileSync("/tmp/answers.json", "utf8"));
const typesSeen = new Set();
async function solveLesson(lessonId, { failFirst = true } = {}) {
  const exs = KEY[lessonId]; let steps = 0, failed = false;
  while (steps++ < 80) {
    if (await page.$("#screen-results")) return true;
    if (await page.$("#hearts-modal")) return false;
    const q = await page.$eval("#exercise h2", (h) => h.textContent);
    const ex = exs.find((e) => e.q === q); if (!ex) { log("no key for", q); return false; }
    typesSeen.add(ex.type);
    const wrong = failFirst && !failed;
    if (ex.type === "mc") { const i = wrong ? (ex.answer + 1) % ex.choices.length : ex.answer; await page.click(`.choices .choice:nth-child(${i + 1})`); }
    else if (ex.type === "tf") { const v = wrong ? !ex.answer : ex.answer; await page.click(`.choices.two .choice:nth-child(${v ? 1 : 2})`); }
    else if (ex.type === "dc") { const v = wrong ? (ex.answer === "debit" ? "credit" : "debit") : ex.answer; await page.click(`.dc-grid .choice:nth-child(${v === "debit" ? 1 : 2})`); }
    else if (ex.type === "fill") { await page.fill(".fill-row input", String(wrong ? ex.answer + 999 : ex.answer)); }
    else if (ex.type === "je") { for (const a of ex.answer.debit) await page.click(`.je-bank .chip:text-is("${a}")`); for (const a of ex.answer.credit) { await page.click(`.je-bank .chip:text-is("${a}")`); await page.click(`.je-bank .chip:text-is("${a}")`); } if (wrong) { const extra = ex.accounts.find((a) => !ex.answer.debit.includes(a) && !ex.answer.credit.includes(a)); if (extra) await page.click(`.je-bank .chip:text-is("${extra}")`); } }
    else if (ex.type === "order") { for (let pass = 0; pass < ex.items.length; pass++) for (let i = 0; i < ex.items.length; i++) { const cur = await page.$$eval(".order-item span:nth-child(2)", (s) => s.map((x) => x.textContent)); const want = ex.items[i]; const at = cur.indexOf(want); if (at > i) await page.click(`.order-item:nth-child(${at + 1}) button[disabled]:not(*), .order-item:nth-child(${at + 1}) button:first-of-type`); } if (wrong) await page.click(`.order-item:nth-child(1) button:last-of-type`); }
    else if (ex.type === "match") { const wrongL = ex.pairs[0][0], wrongR = ex.pairs.find((p) => p[1] !== ex.pairs[0][1])?.[1]; if (wrong && wrongR) { await page.click(`.match-grid [data-side="L"]:text-is("${wrongL}")`); await page.click(`.match-grid [data-side="R"]:text-is("${wrongR}")`); await page.waitForTimeout(600); } for (const [l, r] of ex.pairs) { await page.click(`.match-grid [data-side="L"]:text-is("${l}")`); await page.click(`.match-grid [data-side="R"]:text-is("${r}")`); await page.waitForTimeout(450); } }
    await page.waitForFunction(() => !document.querySelector("#btn-check").disabled, null, { timeout: 5000 }).catch(() => {});
    if (await page.$eval("#btn-check", (b) => b.disabled)) { log("stuck on", ex.type, q); return false; }
    await page.click("#btn-check");
    await page.waitForSelector(".lesson-foot.ok, .lesson-foot.bad");
    const ok = !!(await page.$(".lesson-foot.ok"));
    if (wrong) { failed = true; if (ok && ex.type !== "match") log("  (expected wrong but graded ok)", ex.type); await page.screenshot({ path: "/home/user/shots/next-lesson-feedback.png" }); }
    if (!wrong && !ok) log("  UNEXPECTED WRONG for", ex.type, q);
    log(`  ${ex.type} ok=${ok} hearts=${await page.textContent("#lesson-hearts")} progress=${await page.$eval("#lesson-progress", (e) => e.style.width)}`);
    await page.click("#btn-check"); await page.waitForTimeout(150);
  }
  return false;
}
await solveLesson("t01l1");
if (await page.$("#screen-results")) {
  log("results:", await page.$eval(".results-card", (c) => c.innerText.replace(/\n/g, " | ")));
  await page.screenshot({ path: "/home/user/shots/next-results.png" });
  await page.click("#btn-continue");
  await page.waitForSelector("#screen-home");
  log("after lesson topbar:", await page.$eval(".stats", (s) => s.innerText.replace(/\n/g, " ")));
  log("done nodes:", await page.$$eval(".node.done", (n) => n.length));
}

// Additional lessons chosen to cover every activity type
const need = ["dc", "je", "match", "order"];
for (const t of need) { if (typesSeen.has(t)) continue; const id = Object.keys(KEY).find((k) => KEY[k].some((e) => e.type === t)); log("-- extra lesson for", t, "→", id);
  await page.goto(BASE + "/lesson/" + id, { waitUntil: "load" }); await page.waitForSelector("#screen-lesson, #hearts-modal", { timeout: 15000 });
  if (await page.$("#hearts-modal")) { log("   blocked by hearts modal"); break; }
  const done = await solveLesson(id, { failFirst: false }); log("   completed:", done); }
log("activity types exercised:", [...typesSeen].join(","));

// Hearts modal from topbar
await page.goto(BASE, { waitUntil: "load" }); await page.waitForSelector("#screen-home", { timeout: 15000 });
await page.click("#btn-hearts"); await page.waitForSelector("#hearts-modal");
log("hearts modal:", await page.$eval(".modal-card", (c) => c.innerText.replace(/\n/g, " | ").slice(0, 200)));
await page.screenshot({ path: "/home/user/shots/next-hearts.png" });
await page.click("#hearts-close");

// League
await page.click("#btn-league"); await page.waitForSelector("#screen-league"); await page.waitForTimeout(2500);
log("league:", await page.$eval("#league-title", (e) => e.textContent), "| rows:", await page.$$eval("#league-list li", (l) => l.length));
await page.screenshot({ path: "/home/user/shots/next-league.png" });
// Profile
await page.click("#btn-profile"); await page.waitForSelector("#screen-profile");
log("profile:", await page.$eval(".profile-card", (c) => c.innerText.replace(/\n/g, " | ").slice(0, 300)));
log("badges earned:", await page.$$eval(".badge.earned", (b) => b.map((x) => x.textContent)));
await page.screenshot({ path: "/home/user/shots/next-profile.png" });
// Dark mode
await page.click("#btn-theme"); await page.waitForTimeout(300);
log("theme:", await page.$eval("html", (h) => h.dataset.theme), "persisted:", await page.evaluate(() => localStorage.getItem("ll_theme")));
await page.click("#btn-back-home"); await page.waitForSelector("#screen-home");
await page.screenshot({ path: "/home/user/shots/next-home-dark.png" });
// Track switch
await page.click(".track-btn:nth-child(2)"); await page.waitForTimeout(300);
log("switched track summary:", await page.$eval(".track-summary", (e) => e.innerText));
// Direct lesson URL + 404
await page.goto(BASE + "/lesson/t20l1", { waitUntil: "load" }); await page.waitForSelector("#screen-lesson, #hearts-modal", { timeout: 15000 });
log("direct lesson t20l1:", await page.$eval("#lesson-tip", (e) => e.innerText.slice(0, 80)).catch(() => "hearts modal (locked/out of hearts)"));
const r404 = await page.goto(BASE + "/lesson/nope"); log("404 status:", r404.status());
// Mobile
const m = await ctx.newPage(); await m.setViewportSize({ width: 390, height: 844 });
await m.goto(BASE, { waitUntil: "load" }); await m.waitForSelector("#screen-home", { timeout: 15000 }); await m.waitForTimeout(500);
await m.screenshot({ path: "/home/user/shots/next-mobile.png" });
await m.click(".node.done .circle, .node.current .circle", { force: true }); await m.waitForSelector("#screen-lesson"); await m.screenshot({ path: "/home/user/shots/next-mobile-lesson.png" });
// Logout
await page.goto(BASE + "/profile", { waitUntil: "load" }); await page.waitForSelector("#btn-logout", { timeout: 15000 }); await page.click("#btn-logout"); await page.waitForSelector("#screen-auth", { timeout: 15000 }); log("logout ok");
log("console errors:", errors.length ? errors : "none");
await browser.close();
