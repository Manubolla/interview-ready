// 4. *Palindrome Permutation*:

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation(str: string): boolean {
  const count: Record<string, number> = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (char === " ") continue;

    count[char] = (count[char] || 0) + 1;
  }

  let odd = 0;

  for (const value of Object.values(count)) {
    if (value % 2 !== 0) odd++;
    if (odd > 1) return false;
  }
  return true;
}
