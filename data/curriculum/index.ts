/**
 * Curriculum entry point. Content files are registered in the SAME order the original
 * index.html loaded them, so unit/lesson ids (t01l1 …) are identical to the legacy app.
 */
import type { Course, Curriculum, Lesson, Unit } from "@/types/curriculum";
import { tracks } from "./authoring";
import { register as acct1 } from "./acct-1";
import { register as acct2 } from "./acct-2";
import { register as acct3 } from "./acct-3";
import { register as tax } from "./tax";
import { register as more1 } from "./acct-more-1";
import { register as more2 } from "./acct-more-2";
import { register as more3 } from "./acct-more-3";
import { register as more4 } from "./acct-more-4";

let built: Curriculum | null = null;

export function getCurriculum(): Curriculum {
  if (built) return built;
  if (tracks.every((t) => t.units.length === 0)) {
    acct1(); acct2(); acct3(); tax(); more1(); more2(); more3(); more4();
  }
  built = { tracks };
  return built;
}

export type { Course, Unit, Lesson };
