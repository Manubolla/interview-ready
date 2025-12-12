// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
  const count: Record<string, number> = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];

    count[char] = (count[char] || 0) + 1;
  }

  for (let j = 0; j < s2.length; j++) {
    const char = s2[j];
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}
