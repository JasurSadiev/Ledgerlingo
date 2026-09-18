"use client";
import { useEffect, useState } from "react";
import type { TrueFalseActivity } from "@/types/curriculum";
import type { ActivityProps } from "./types";

export default function TrueFalse({ activity, locked, checked, onReady }: ActivityProps<TrueFalseActivity>) {
  const [sel, setSel] = useState<boolean | null>(null);
  useEffect(() => { onReady(sel === null ? null : () => sel === activity.answer); }, [sel, activity, onReady]);
  const opts: [string, boolean][] = [["True", true], ["False", false]];
  return (
    <div className="choices two">
      {opts.map(([t, v]) => {
        let cls = "choice";
        if (checked !== null) { if (v === activity.answer) cls += " correct"; else if (v === sel) cls += " wrong"; }
        else if (v === sel) cls += " selected";
        return <button key={t} className={cls} onClick={() => { if (!locked) setSel(v); }}>{t}</button>;
      })}
    </div>
  );
}
