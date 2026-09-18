/* Verifies that the TypeScript curriculum is deep-equal to the legacy JS curriculum files. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { getCurriculum } from "../data/curriculum";

const legacyDir = process.argv[2] || path.join(__dirname, "..", "legacy");
const files = ["curriculum.js", "curriculum-acct-1.js", "curriculum-acct-2.js", "curriculum-acct-3.js", "curriculum-tax.js", "curriculum-acct-more-1.js", "curriculum-acct-more-2.js", "curriculum-acct-more-3.js", "curriculum-acct-more-4.js"];
const sandbox: { window: Record<string, unknown>; console: Console } = { window: {}, console };
vm.createContext(sandbox);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(legacyDir, f), "utf8"), sandbox, { filename: f });
const legacy = JSON.stringify(sandbox.window.CURRICULUM);
const next = JSON.stringify(getCurriculum());
const cur = getCurriculum();
const lessons = cur.tracks.flatMap((t) => t.units.flatMap((u) => u.lessons));
const ex = lessons.reduce((s, l) => s + l.exercises.length, 0);
console.log(`tracks=${cur.tracks.length} units=${cur.tracks.reduce((s, t) => s + t.units.length, 0)} lessons=${lessons.length} exercises=${ex}`);
if (legacy !== next) { console.error("MISMATCH between legacy and TypeScript curriculum"); process.exit(1); }
console.log("OK — TypeScript curriculum is identical to legacy curriculum (deep equal, " + legacy.length + " chars)");
