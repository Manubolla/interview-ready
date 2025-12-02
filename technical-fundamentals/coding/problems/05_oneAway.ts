// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  if (str1 === str2) return true;
  let len1: number = 0;
  let len2: number = 0;
  let count = 0;

  while (len1 < str1.length && len2 < str1.length) {
    if (str1[len1] !== str2[len2]) {
      count++;
      // if its removing a character we move one of the pointers 2 positions to match the other word.
      if (str1[len1 + 1] === str2[len2]) {
        len1 += 2;
        len2++;
        break;
      } else if (str1[len1] === str2[len2 + 1]) {
        len1++;
        len2 += 2;
        break;
      }
    }
    // If char 1 and char 2 are equal we move both pointers one positon.
    len1++;
    len2++;
  }

  return count <= 1;
}
