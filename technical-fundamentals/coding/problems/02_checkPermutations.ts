// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  let hashS1: Record<string, number> = {};
  let hashS2: Record<string, number> = {};

  for (let i = 0; i < s1.length; i++) {
    if (!hashS1[s1[i]]) {
      hashS1[s1[i]] = 1;
    } else {
      hashS1[s1[i]] = hashS1[s1[i]] + 1;
    }

    if (!hashS2[s2[i]]) {
      hashS2[s2[i]] = 1;
    } else {
      hashS2[s2[i]] = hashS2[s2[i]] + 1;
    }
  }

  for (const [key, value] of Object.entries(hashS1)) {
    if (hashS2[key] !== value) return false;
  }

  return true;
}
