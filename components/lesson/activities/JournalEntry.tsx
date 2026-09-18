"use client";
import { useEffect, useMemo, useState } from "react";
import { shuffle } from "@/lib/gamification";
import type { JournalEntryActivity } from "@/types/curriculum";
import type { ActivityProps } from "./types";

type Side = "debit" | "credit" | null;

export default function JournalEntry({ activity, locked, checked, onReady }: ActivityProps<JournalEntryActivity>) {
  const bank = useMemo(() => shuffle(activity.accounts), [activity]);
  const [placement, setPlacement] = useState<Record<string, Side>>({});
  useEffect(() => {
    if (!Object.values(placement).some(Boolean)) { onReady(null); return; }
    onReady(() => {
      const d = Object.entries(placement).filter(([, s]) => s === "debit").map(([a]) => a).sort();
      const c = Object.entries(placement).filter(([, s]) => s === "credit").map(([a]) => a).sort();
      return JSON.stringify(d) === JSON.stringify([...activity.answer.debit].sort()) && JSON.stringify(c) === JSON.stringify([...activity.answer.credit].sort());
    });
  }, [placement, activity, onReady]);
  const cycle = (acc: string) => { if (locked) return; setPlacement((p) => ({ ...p, [acc]: p[acc] === "debit" ? "credit" : p[acc] === "credit" ? null : "debit" })); };
  const border = checked === null ? undefined : { borderColor: checked ? "var(--green)" : "var(--red)" };
  const col = (side: "debit" | "credit", label: string) => (
    <div className={"je-col " + side} data-side={side} style={border}>
      <h4>{label}</h4>
      {Object.entries(placement).filter(([, s]) => s === side).map(([acc]) => <div key={acc} className={"chip placed in-" + side}>{acc}</div>)}
    </div>
  );
  return (
    <div>
      <div className="je">{col("debit", "Debit")}{col("credit", "Credit")}</div>
      <div className="je-help">Tap an account to place it in Debit; tap again to move it to Credit; once more to remove.</div>
      <div className="je-bank">
        {bank.map((acc) => <button key={acc} className={"chip" + (placement[acc] ? " in-" + placement[acc] : "")} onClick={() => cycle(acc)}>{acc}</button>)}
      </div>
    </div>
  );
}
