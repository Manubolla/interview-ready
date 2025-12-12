// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
  let seen = new Set();

  for (const char of str) {
    if (seen.has(char)) return false;
    seen.add(char);
  }
  return true;
}
