"use client";
import { useEffect, useState } from "react";
import type { DebitCreditActivity } from "@/types/curriculum";
import type { ActivityProps } from "./types";

export default function DebitCredit({ activity, locked, checked, onReady }: ActivityProps<DebitCreditActivity>) {
  const [sel, setSel] = useState<"debit" | "credit" | null>(null);
  useEffect(() => { onReady(sel === null ? null : () => sel === activity.answer); }, [sel, activity, onReady]);
  const opts: ["debit" | "credit", string, string][] = [["debit", "DEBIT", "left side"], ["credit", "CREDIT", "right side"]];
  return (
    <div className="choices dc-grid">
      {opts.map(([v, t, s]) => {
        let cls = "choice";
        if (checked !== null) { if (v === activity.answer) cls += " correct"; else if (v === sel) cls += " wrong"; }
        else if (v === sel) cls += " selected";
        return <button key={v} className={cls} onClick={() => { if (!locked) setSel(v); }}>{t}<small>{s}</small></button>;
      })}
    </div>
  );
}
