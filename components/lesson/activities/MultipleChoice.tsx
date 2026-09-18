"use client";
import { useEffect, useState } from "react";
import type { MultipleChoiceActivity } from "@/types/curriculum";
import type { ActivityProps } from "./types";

export default function MultipleChoice({ activity, locked, checked, onReady }: ActivityProps<MultipleChoiceActivity>) {
  const [sel, setSel] = useState<number | null>(null);
  useEffect(() => { onReady(sel === null ? null : () => sel === activity.answer); }, [sel, activity, onReady]);
  return (
    <div className="choices">
      {activity.choices.map((c, i) => {
        let cls = "choice";
        if (checked !== null) { if (i === activity.answer) cls += " correct"; else if (i === sel) cls += " wrong"; }
        else if (i === sel) cls += " selected";
        return (
          <button key={i} className={cls} onClick={() => { if (!locked) setSel(i); }}>
            <span className="key">{i + 1}</span>{c}
          </button>
        );
      })}
    </div>
  );
}
