import type { Activity } from "@/types/curriculum";

/**
 * Contract every activity component implements.
 * - `locked` is true after the answer is checked (no more interaction).
 * - `onReady(getAnswer)` registers a grader; passing null disables the Check button.
 * - `checked` is the grading result once checked, used to paint correct/wrong states.
 */
export interface ActivityProps<A extends Activity = Activity> {
  activity: A;
  locked: boolean;
  checked: boolean | null;
  onReady: (grader: (() => boolean) | null) => void;
  /** Request an immediate check (Enter key in fill input) */
  requestCheck: () => void;
}
