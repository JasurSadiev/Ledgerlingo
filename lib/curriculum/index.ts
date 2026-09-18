/** Curriculum query helpers — the UI never walks the raw data tree directly. */
import { getCurriculum } from "@/data/curriculum";
import type { Activity, Course, Lesson, Unit } from "@/types/curriculum";

export interface LessonRef { lesson: Lesson; unit: Unit; course: Course }

export function getCourses(): Course[] { return getCurriculum().tracks; }

export function getCourse(courseId: string): Course | undefined { return getCourses().find((t) => t.id === courseId); }

export function getUnit(unitId: string): Unit | undefined { return getCourses().flatMap((t) => t.units).find((u) => u.id === unitId); }

/** Every lesson of a course with its parent unit (same as legacy `allLessons(track)`). */
export function getCourseLessons(course: Course): LessonRef[] {
  return course.units.flatMap((unit) => unit.lessons.map((lesson) => ({ lesson, unit, course })));
}

export function getAllLessons(): LessonRef[] { return getCourses().flatMap(getCourseLessons); }

export function getLesson(lessonId: string): LessonRef | undefined { return getAllLessons().find((r) => r.lesson.id === lessonId); }

export function getActivity(lessonId: string, index: number): Activity | undefined { return getLesson(lessonId)?.lesson.exercises[index]; }

export function countLessons(course: Course): number { return getCourseLessons(course).length; }
