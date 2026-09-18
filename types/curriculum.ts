/** Curriculum domain types — mirrors the data shapes produced by the original `window.LL` helpers. */

export type ActivityType = "mc" | "tf" | "dc" | "fill" | "je" | "match" | "order";

interface ActivityBase {
  type: ActivityType;
  /** Question / prompt text */
  q: string;
  /** Explanation shown after answering (correct or not) */
  explain: string;
}

/** Multiple choice — `answer` is the index of the correct choice. */
export interface MultipleChoiceActivity extends ActivityBase {
  type: "mc";
  choices: string[];
  answer: number;
}

/** True / False */
export interface TrueFalseActivity extends ActivityBase {
  type: "tf";
  answer: boolean;
}

/** Debit or Credit */
export interface DebitCreditActivity extends ActivityBase {
  type: "dc";
  answer: "debit" | "credit";
}

/** Numeric fill-in-the-blank */
export interface FillActivity extends ActivityBase {
  type: "fill";
  answer: number;
  /** "$" (default), "%", "x", "days", "K", "" … */
  unit: string;
  /** Absolute tolerance; engine default is 0.51 when undefined */
  tolerance?: number;
}

/** Journal entry builder — place each account in Debit / Credit / nowhere. */
export interface JournalEntryActivity extends ActivityBase {
  type: "je";
  /** Account bank (correct accounts + distractors) */
  accounts: string[];
  answer: { debit: string[]; credit: string[] };
}

/** Matching pairs [left, right] */
export interface MatchActivity extends ActivityBase {
  type: "match";
  pairs: [string, string][];
}

/** Put items in the correct order — `items` is the correct sequence. */
export interface OrderActivity extends ActivityBase {
  type: "order";
  items: string[];
}

export type Activity =
  | MultipleChoiceActivity
  | TrueFalseActivity
  | DebitCreditActivity
  | FillActivity
  | JournalEntryActivity
  | MatchActivity
  | OrderActivity;

/** Alias kept for readers used to the original naming. */
export type Exercise = Activity;

export interface Lesson {
  id: string; // e.g. "t01l1"
  title: string;
  tip: string;
  exercises: Activity[];
}

export interface Unit {
  id: string; // e.g. "t01", "x03"
  title: string;
  desc: string;
  lessons: Lesson[];
}

/** A "track" is the top-level course (Accounting / Tax Pro). */
export interface Course {
  id: string;
  title: string;
  emoji: string;
  color: string;
  desc: string;
  units: Unit[];
}
export type Track = Course;

export interface Curriculum {
  tracks: Course[];
}

/** Authoring tuple used by the content files: [title, tip, exercises] */
export type LessonDef = [string, string, Activity[]];
