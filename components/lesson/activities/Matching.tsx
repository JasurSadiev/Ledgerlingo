"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { shuffle } from "@/lib/gamification";
import type { MatchActivity } from "@/types/curriculum";
import type { ActivityProps } from "./types";

type Flash = "correct" | "wrong" | null;

/** Match pairs; graded as correct when at most one mistake was made (legacy rule). */
export default function Matching({ activity, locked, onReady }: ActivityProps<MatchActivity>) {
  const { lefts, rights, map } = useMemo(() => ({
    lefts: shuffle(activity.pairs.map((p) => p[0])),
    rights: shuffle([...new Set(activity.pairs.map((p) => p[1]))]),
    map: new Map(activity.pairs.map((p) => [p[0], p[1]])),
  }), [activity]);
  const [selL, setSelL] = useState<string | null>(null);
  const [selR, setSelR] = useState<string | null>(null);
  const [matchedL, setMatchedL] = useState<Set<string>>(new Set());
  const [flash, setFlash] = useState<{ L: string; R: string; kind: Flash } | null>(null);
  const mistakes = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => {
    if (matchedL.size === lefts.length) onReady(() => mistakes.current <= 1); else onReady(null);
  }, [matchedL, lefts.length, onReady]);

  useEffect(() => {
    if (selL === null || selR === null) return;
    const L = selL, R = selR; const good = map.get(L) === R;
    setSelL(null); setSelR(null);
    setFlash({ L, R, kind: good ? "correct" : "wrong" });
    if (good) timers.current.push(setTimeout(() => { setFlash(null); setMatchedL((s) => new Set(s).add(L)); }, 350));
    else { mistakes.current++; timers.current.push(setTimeout(() => setFlash(null), 500)); }
  }, [selL, selR, map]);

  const rightMatched = (txt: string) => !lefts.some((l) => map.get(l) === txt && !matchedL.has(l));
  const cls = (txt: string, side: "L" | "R") => {
    let c = "choice";
    const isMatched = side === "L" ? matchedL.has(txt) : rightMatched(txt);
    if (flash && ((side === "L" && flash.L === txt) || (side === "R" && flash.R === txt))) c += " " + flash.kind;
    else if (isMatched) c += " matched";
    else if ((side === "L" && selL === txt) || (side === "R" && selR === txt)) c += " selected";
    return c;
  };
  const pick = (txt: string, side: "L" | "R") => { if (locked || flash) return; if (side === "L") setSelL(txt); else setSelR(txt); };
  const rows = Math.max(lefts.length, rights.length);
  const cells: React.ReactNode[] = [];
  for (let i = 0; i < rows; i++) {
    if (lefts[i] !== undefined) cells.push(<button key={"L" + i} className={cls(lefts[i], "L")} data-side="L" onClick={() => pick(lefts[i], "L")}>{lefts[i]}</button>);
    if (rights[i] !== undefined) cells.push(<button key={"R" + i} className={cls(rights[i], "R")} data-side="R" onClick={() => pick(rights[i], "R")}>{rights[i]}</button>);
  }
  return <div className="match-grid">{cells}</div>;
}
