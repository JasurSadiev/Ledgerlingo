/**
 * Authoring helpers — a typed port of the original `window.LL` object.
 * The content files call these exactly as before, so the educational data is unchanged.
 */
import type {
  Activity,
  Course,
  DebitCreditActivity,
  FillActivity,
  JournalEntryActivity,
  LessonDef,
  MatchActivity,
  MultipleChoiceActivity,
  OrderActivity,
  TrueFalseActivity,
} from "@/types/curriculum";

export const mc = (q: string, choices: string[], answer: number, explain: string): MultipleChoiceActivity => ({ type: "mc", q, choices, answer, explain });
export const tf = (q: string, answer: boolean, explain: string): TrueFalseActivity => ({ type: "tf", q, answer, explain });
export const dc = (q: string, answer: "debit" | "credit", explain: string): DebitCreditActivity => ({ type: "dc", q, answer, explain });
export const fill = (q: string, answer: number, explain: string, opt: { unit?: string; tol?: number } = {}): FillActivity => ({
  type: "fill", q, answer, explain, unit: opt.unit === undefined ? "$" : opt.unit, tolerance: opt.tol,
});
export const je = (q: string, accounts: string[], debit: string[], credit: string[], explain: string): JournalEntryActivity => ({ type: "je", q, accounts, answer: { debit, credit }, explain });
export const match = (q: string, pairs: [string, string][], explain: string): MatchActivity => ({ type: "match", q, pairs, explain });
export const order = (q: string, items: string[], explain: string): OrderActivity => ({ type: "order", q, items, explain });

/** Registry of courses; content files push units into it. Same ids/titles/colors as the original app. */
export const tracks: Course[] = [
  { id: "accounting", title: "Accounting", emoji: "📒", color: "#58cc02", desc: "All 33 AccountingCoach topics in order", units: [] },
  { id: "tax", title: "Tax Pro", emoji: "🏛️", color: "#ce82ff", desc: "Advanced U.S. tax for experienced accountants", units: [] },
];

export const unit = (trackId: string, id: string, title: string, desc: string, lessons: LessonDef[]): void => {
  const t = tracks.find((x) => x.id === trackId);
  if (!t) throw new Error(`Unknown track ${trackId}`);
  t.units.push({ id, title, desc, lessons: lessons.map((l, i) => ({ id: id + "l" + (i + 1), title: l[0], tip: l[1], exercises: l[2] })) });
};

export const addLessons = (unitId: string, lessons: LessonDef[]): void => {
  const u = tracks.flatMap((t) => t.units).find((x) => x.id === unitId);
  if (!u) { console.warn("no unit", unitId); return; }
  lessons.forEach((l) => { const n = u.lessons.length + 1; u.lessons.push({ id: unitId + "l" + n, title: l[0], tip: l[1], exercises: l[2] }); });
};

export type { Activity };
