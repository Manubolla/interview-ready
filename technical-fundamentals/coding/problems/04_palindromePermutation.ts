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
  if (str?.length <= 1) return true;

  let hash: Record<string, number> = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char === " ") continue; // skip spaces
    if (!hash[char]) hash[char] = 1;
    else hash[char] = hash[char] + 1;
  }

  let oddCount = 0;
  for (const value of Object.values(hash)) {
    console.log(value, oddCount);
    if (value % 2 !== 0) oddCount++;
  }

  return oddCount <= 1; // We can have just 1 letter and it will still be a palindrome.
}
