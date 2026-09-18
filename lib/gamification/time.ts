export const todayStr = (): string => new Date().toISOString().slice(0, 10);
export const yesterdayStr = (): string => new Date(Date.now() - 864e5).toISOString().slice(0, 10);

/** ISO week key (Monday start, UTC) e.g. 2026-W38 — same algorithm as legacy. */
export const weekKey = (d: Date = new Date()): string => {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y = t.getUTCFullYear();
  const w = Math.ceil(((t.getTime() - Date.UTC(y, 0, 1)) / 864e5 + 1) / 7);
  return `${y}-W${String(w).padStart(2, "0")}`;
};

export const weekEnd = (): Date => {
  const n = new Date(); const day = n.getDay() || 7; const e = new Date(n);
  e.setHours(0, 0, 0, 0); e.setDate(n.getDate() + (8 - day)); return e;
};

export const fmtMs = (ms: number): string => {
  ms = Math.max(0, ms); const m = Math.floor(ms / 6e4), s = Math.floor((ms % 6e4) / 1e3);
  return `${m}:${String(s).padStart(2, "0")}`;
};

export const shuffle = <T,>(a: readonly T[]): T[] => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
};
