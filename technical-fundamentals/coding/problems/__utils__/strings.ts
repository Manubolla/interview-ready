let called = false;

/**
 * Resets the isSubstring call counter.
 * Use this in test beforeEach to reset state between tests.
 */
export const resetIsSubstring = () => {
  called = false;
};

/**
 * Checks if a string is included in another string.
 * It can only be used once per test.
 * (used in problem 09: String rotation.)
 *
 * @param {string} s1 - String to compare
 * @param {string} s2 - Substring.
 * @return {boolean} If s1 contains s2.
 */
export const isSubstring = (s1: string, s2: string): boolean => {
  if (called) throw new Error("isSubstring() can be used only once.");
  called = true;
  return s1.includes(s2);
};
