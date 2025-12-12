// 5. *One Away*:

import { L } from "vitest/dist/chunks/reporters.C_zwCd4j.js";

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  const len1 = str1.length;
  const len2 = str2.length;

  if (Math.abs(len1 - len2) > 1) return false;

  let shorter = len1 < len2 ? str1 : str2;
  let longer = len1 < len2 ? str2 : str1;

  let pointerS = 0;
  let pointerL = 0;
  let foundDifference = false;

  while (pointerS < shorter.length && pointerL < longer.length) {
    const charS = shorter[pointerS];
    const charL = longer[pointerL];

    if (charS !== charL) {
      if (foundDifference) return false;
      foundDifference = true;

      if (len1 === len2) {
        pointerS++;
      }
    } else {
      pointerS++;
    }
    pointerL++;
  }
  return true;
}
