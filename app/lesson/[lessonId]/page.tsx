import { notFound } from "next/navigation";
import LessonPlayer from "@/components/lesson/LessonPlayer";
import { getAllLessons, getLesson } from "@/lib/curriculum";

// Server component: resolves the lesson from the curriculum, pre-renders all 146 routes.
export function generateStaticParams() { return getAllLessons().map((r) => ({ lessonId: r.lesson.id })); }
export const dynamicParams = false;

export default async function LessonPage({ params, searchParams }: { params: Promise<{ lessonId: string }>; searchParams: Promise<{ practice?: string }> }) {
  const { lessonId } = await params;
  const sp = await searchParams;
  const ref = getLesson(lessonId);
  if (!ref) notFound();
  return <LessonPlayer key={lessonId} lesson={ref.lesson} earnHeart={sp.practice === "heart"} />;
}
