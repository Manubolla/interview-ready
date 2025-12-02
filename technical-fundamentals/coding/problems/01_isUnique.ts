// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
  let a = 0;
  let b = 1;
  let char = str[a];

  while (a <= str.length - 1) {
    if (char === str[b]) return false;
    else if (b < str.length - 1) {
      b++;
    } else {
      a += 1;
      b = a + 1;
      char = str[a];
    }
  }
  return true;
}

// With additional data structures we could use a hash map
