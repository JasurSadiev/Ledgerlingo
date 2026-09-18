"use client";
import { useEffect, useState } from "react";
import { shuffle } from "@/lib/gamification";
import type { OrderActivity } from "@/types/curriculum";
import type { ActivityProps } from "./types";

export default function Ordering({ activity, locked, checked, onReady }: ActivityProps<OrderActivity>) {
  const [items, setItems] = useState<string[]>(() => {
    let s = shuffle(activity.items);
    if (JSON.stringify(s) === JSON.stringify(activity.items)) s = [...s.slice(1), s[0]];
    return s;
  });
  useEffect(() => { onReady(() => items.every((it, i) => it === activity.items[i])); }, [items, activity, onReady]);
  const move = (i: number, d: number) => { if (locked) return; setItems((a) => { const b = [...a]; [b[i], b[i + d]] = [b[i + d], b[i]]; return b; }); };
  return (
    <div className="order-list">
      {items.map((it, i) => {
        const cls = "order-item" + (checked === null ? "" : it === activity.items[i] ? " correct" : " wrong");
        return (
          <div key={it} className={cls}>
            <span className="num">{i + 1}</span><span>{it}</span>
            <button onClick={() => move(i, -1)} disabled={i === 0}>▲</button>
            <button onClick={() => move(i, 1)} disabled={i === items.length - 1}>▼</button>
          </div>
        );
      })}
    </div>
  );
}
