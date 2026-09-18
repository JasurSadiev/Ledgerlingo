"use client";
import type { Activity } from "@/types/curriculum";
import DebitCredit from "./DebitCredit";
import FillBlank from "./FillBlank";
import JournalEntry from "./JournalEntry";
import Matching from "./Matching";
import MultipleChoice from "./MultipleChoice";
import Ordering from "./Ordering";
import TrueFalse from "./TrueFalse";
import type { ActivityProps } from "./types";

/** Lesson → ActivityRenderer → activity type → reusable component. */
export default function ActivityRenderer(props: ActivityProps<Activity>) {
  const { activity } = props;
  switch (activity.type) {
    case "mc": return <MultipleChoice {...props} activity={activity} />;
    case "tf": return <TrueFalse {...props} activity={activity} />;
    case "dc": return <DebitCredit {...props} activity={activity} />;
    case "fill": return <FillBlank {...props} activity={activity} />;
    case "je": return <JournalEntry {...props} activity={activity} />;
    case "match": return <Matching {...props} activity={activity} />;
    case "order": return <Ordering {...props} activity={activity} />;
    default: { const t = (activity as { type: string }).type; return <p className="muted">Unsupported exercise type: {t}</p>; }
  }
}
