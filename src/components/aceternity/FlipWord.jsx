import React from "react";
import { FlipWords } from "../ui/FlipWords";

export function FlipWord() {
  const words = ["Developer", "Engineer"];

  return (
    <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      George Misael <br />
      Software <FlipWords words={words} />
    </div>
  );
}
