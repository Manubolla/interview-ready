// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
  if (str.length <= 1) return str;
  let ans: string = "";
  let char: string = str[0];
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) count++;
    else {
      ans += `${char}${count}`;
      count = 1;
      char = str[i];
    }
  }

  if (count > 0) {
    ans += `${char}${count}`;
  }

  return ans.length < str.length ? ans : str;
}
