// LedgerLingo curriculum registry + authoring helpers.
// Content files (curriculum-*.js) push units into tracks defined here.
// Sources: AccountingCoach.com topic explanations (33-topic outline), IRS Pubs 15/15-T/946/542, IRC, ASC/GAAP, SSA.
window.CURRICULUM = { tracks: [
  { id: "accounting", title: "Accounting", emoji: "📒", color: "#58cc02", desc: "All 33 AccountingCoach topics in order", units: [] },
  { id: "tax", title: "Tax Pro", emoji: "🏛️", color: "#ce82ff", desc: "Advanced U.S. tax for experienced accountants", units: [] }
]};
window.LL = (function () {
  const mc = (q, choices, answer, explain) => ({ type: "mc", q, choices, answer, explain });
  const tf = (q, answer, explain) => ({ type: "tf", q, answer, explain });
  const dc = (q, answer, explain) => ({ type: "dc", q, answer, explain });
  const fill = (q, answer, explain, opt = {}) => ({ type: "fill", q, answer, explain, unit: opt.unit === undefined ? "$" : opt.unit, tolerance: opt.tol });
  const je = (q, accounts, debit, credit, explain) => ({ type: "je", q, accounts, answer: { debit, credit }, explain });
  const match = (q, pairs, explain) => ({ type: "match", q, pairs, explain });
  const order = (q, items, explain) => ({ type: "order", q, items, explain });
  const unit = (trackId, id, title, desc, lessons) => {
    const t = window.CURRICULUM.tracks.find((x) => x.id === trackId);
    t.units.push({ id, title, desc, lessons: lessons.map((l, i) => ({ id: id + "l" + (i + 1), title: l[0], tip: l[1], exercises: l[2] })) });
  };
  const addLessons = (unitId, lessons) => {
    const u = window.CURRICULUM.tracks.flatMap((t) => t.units).find((x) => x.id === unitId);
    if (!u) { console.warn("no unit", unitId); return; }
    lessons.forEach((l) => { const n = u.lessons.length + 1; u.lessons.push({ id: unitId + "l" + n, title: l[0], tip: l[1], exercises: l[2] }); });
  };
  return { mc, tf, dc, fill, je, match, order, unit, addLessons };
})();
