// 9. *String Rotation*;

import { isSubstring } from "./__utils__/strings";

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
// [e.g., "waterbottle" is a rotation of 'erbottlewat")

export default function stringRotation(s1: string, s2: string): boolean {
  //waterbottle
  //erbottlewat

  const char = s1[0]; // w
  let a = 0;

  const sub = isSubstring(s2, s1[0]); // true

  let rotated = "";
  if (!sub) return false;

  for (let i = 0; i < s2.length; i++) {
    // erbottlewat
    // e, r, b, o, t, t, l, e,
    if (s2[i] !== char) {
      rotated += s2[i]; // o
    } else {
      // i = 8
      // a = 0, len = 11

      while (a < s2.length - i) {
        rotated += s1[a];
        a++;
      }
      break;
    }
  }

  return s2 === rotated;
}
