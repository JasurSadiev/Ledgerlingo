"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/providers/AppProvider";
import { useProgress } from "@/hooks/useProgress";
import { getCourseLessons, getCourses } from "@/lib/curriculum";
import { regenHearts } from "@/lib/gamification";
import type { Course, Lesson, Unit } from "@/types/curriculum";

/** Home screen: track switcher + collapsible units + lesson path (legacy renderHome). */
export default function LearningPath() {
  const router = useRouter();
  const { updateProfile, openHeartsModal } = useApp();
  const { profile, courseProgress, setTrack } = useProgress();
  const courses = getCourses();
  const currentId = profile && courses.some((c) => c.id === profile.track) ? profile.track : courses[0].id;
  const course = courses.find((c) => c.id === currentId) as Course;

  // Compute unlock state exactly like legacy: sequential; a unit is "current" if unlocked and not finished.
  const model = useMemo(() => {
    let unlocked = true, startShown = false, currentUnitIdx = -1;
    const units = course.units.map((u, ui) => {
      const uDone = u.lessons.filter((l) => profile?.completed[l.id]).length;
      const isCurrent = unlocked && uDone < u.lessons.length;
      const headerUnlocked = unlocked;
      const lessons = u.lessons.map((l) => {
        const done = profile?.completed[l.id];
        const state: "done" | "current" | "locked" = done ? "done" : unlocked ? "current" : "locked";
        const showStart = !done && unlocked && !startShown;
        if (!done && unlocked) startShown = true;
        if (!done) unlocked = false;
        return { l, done, state, showStart };
      });
      if (isCurrent && currentUnitIdx === -1) currentUnitIdx = ui;
      return { u, ui, uDone, isCurrent, headerUnlocked, lessons };
    });
    return { units, currentUnitIdx };
  }, [course, profile]);

  const [open, setOpen] = useState<Record<string, boolean>>({});
  useEffect(() => { setOpen({}); }, [currentId]);
  const isOpen = (u: Unit, isCurrent: boolean) => open[u.id] ?? isCurrent;
  const currentRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (model.currentUnitIdx > 0 && currentRef.current) { const el = currentRef.current; const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50); return () => clearTimeout(t); }
  }, [model.currentUnitIdx, currentId]);

  const start = (l: Lesson) => {
    const p = updateProfile((x) => regenHearts(x));
    if (!p) return;
    const practice = !!p.completed[l.id];
    if (p.hearts <= 0 && !practice) { openHeartsModal({ lessonId: l.id }); return; }
    router.push(`/lesson/${l.id}`);
  };

  return (
    <main id="screen-home" className="screen">
      <div className="track-switch" id="track-switch">
        {courses.map((t) => { const { done, total } = courseProgress(t); return (
          <button key={t.id} className={"track-btn" + (t.id === currentId ? " active" : "")} style={{ "--c": t.color } as React.CSSProperties} onClick={() => setTrack(t.id)}>
            <span>{t.emoji} {t.title}</span><small>{done}/{total} lessons</small>
          </button>); })}
      </div>
      <div id="path">
        <div className="track-summary"><b>{course.desc}</b> · {course.units.length} units · {getCourseLessons(course).length} lessons</div>
        {model.units.map(({ u, ui, uDone, isCurrent, headerUnlocked, lessons }) => (
          <section key={u.id} ref={isCurrent ? currentRef : undefined} className={"unit" + (isOpen(u, isCurrent) ? " open" : "")}>
            <div className="unit-header" style={{ background: headerUnlocked ? course.color : "#afafaf" }} onClick={() => setOpen((o) => ({ ...o, [u.id]: !isOpen(u, isCurrent) }))}>
              <div><small>Unit {ui + 1} · {uDone}/{u.lessons.length}</small><h2>{u.title}</h2><p>{u.desc}</p></div><span className="chev">▾</span>
            </div>
            <div className="lessons">
              {lessons.map(({ l, done, state, showStart }) => (
                <div key={l.id} className={"node " + state} style={{ "--c": course.color } as React.CSSProperties}>
                  {showStart && <div className="start-badge">START</div>}
                  <button className="circle" onClick={state === "locked" ? undefined : () => start(l)}>{done ? "👑" : state === "current" ? "★" : "🔒"}</button>
                  <div className="label">{l.title}</div>
                  {done && <div className="crowns">Best: {done.best}% · {"👑".repeat(Math.min(done.crowns, 5))}</div>}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
