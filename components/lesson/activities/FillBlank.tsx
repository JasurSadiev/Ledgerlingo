"use client";
import { useEffect, useRef, useState } from "react";
import type { FillActivity } from "@/types/curriculum";
import type { ActivityProps } from "./types";

export default function FillBlank({ activity, locked, checked, onReady, requestCheck }: ActivityProps<FillActivity>) {
  const [val, setVal] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { const t = setTimeout(() => ref.current?.focus(), 50); return () => clearTimeout(t); }, []);
  useEffect(() => {
    if (val.trim() === "") { onReady(null); return; }
    onReady(() => { const v = parseFloat(val); const tol = activity.tolerance ?? 0.51; return Math.abs(v - activity.answer) <= tol; });
  }, [val, activity, onReady]);
  const border = checked === null ? undefined : checked ? "var(--green)" : "var(--red)";
  return (
    <div className="fill-row">
      <span>{activity.unit === "$" ? "$" : ""}</span>
      <input ref={ref} type="number" step="any" inputMode="decimal" placeholder="0" value={val} disabled={locked}
        style={border ? { borderColor: border } : undefined}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter" && val.trim() !== "" && !locked) { e.preventDefault(); requestCheck(); } }} />
      <span>{activity.unit && activity.unit !== "$" ? activity.unit : ""}</span>
    </div>
  );
}
