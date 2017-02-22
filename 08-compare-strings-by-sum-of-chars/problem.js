
// Compare two strings by comparing the sum of their letter-Values (char-Value).
// For comparing treat all letters as UpperCase.

// Empty and null-Strings should be treated as they are equal.
// If the string contains other characters than letters, treat the whole string as it would be empty.

// Examples:

// "AD","BC" -> equal

// "AD","DD" -> not equal

// "gf","FG" -> equal

// "zz1","" -> equal

// "ZzZz", "ffPFF" -> equal

// "kl", "lz" -> not equal

// null, "" -> equal

// To test:
// cd 08-compare-strings-by-sum-of-chars
// npm install
// npm test


function compare(s1, s2) {
  if (s1 === null || s2 === null) return true;

  if (s1.length === 0 || s2.length === 0) return true;

  let sum1 = 0;
  let sum2 = 0;
  let str1 = s1.toUpperCase();
  let str2 = s2.toUpperCase();

  let length = s1.length > s2.length ? s1.length : s2.length;

  for (let i = 0; i < length; i++) {
    if (str1[i]) {
      sum1 += str1[i].charCodeAt()
    }
    if (str2[i]) {
      sum2 += str2[i].charCodeAt();
    }
  }

  return sum1 === sum2;

}

module.exports = {
 compare: compare,
 attendance: "In order to succeed, we must first believe that we can."
}
