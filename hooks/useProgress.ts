"use client";
import { useApp } from "@/components/providers/AppProvider";
import { getCourseLessons } from "@/lib/curriculum";
import type { Course } from "@/types/curriculum";

/** Progress queries over the loaded profile. */
export function useProgress() {
  const { profile, profileLoading, updateProfile } = useApp();
  const isCompleted = (lessonId: string) => !!profile?.completed[lessonId];
  const courseProgress = (course: Course) => { const all = getCourseLessons(course); return { done: all.filter((l) => !!profile?.completed[l.lesson.id]).length, total: all.length }; };
  const setTrack = (trackId: string) => updateProfile((p) => ({ ...p, track: trackId }));
  return { profile, profileLoading, isCompleted, courseProgress, setTrack, updateProfile };
}
