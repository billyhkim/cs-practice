/*
Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string. In one operation, you can choose any character of the string and change it to any other uppercase English character. Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.
Note: Both the string's length and k will not exceed 104.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4.
*/

// need sliding window method with 2 pointers
const characterReplacement = (s, k) => {
  const string = s;
  const changeAmount = k;
  let left = 0;
  let right = 0;
  let max = 0;
  let mostFreq = 0;
  const stringMap = {};

  for (right; right < string.length; right++) {
    stringMap[string[right]] = stringMap[string[right]] + 1 || 1;
    mostFreq = Math.max(mostFreq, stringMap[string[right]]);

    // note: right - left + 1 is equal to the length of the window
    // while the length of the window minus the most frequent character accounted (in current window) is greater than the amount of changes we can make--meaning, we have exceeded the amount of changes in the current window
    while (right - left + 1 - mostFreq > changeAmount) {
      // decrement the char that is now outside of the window on the left
      stringMap[string[left]]--;
      // shorten window on left
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};

characterReplacement('AABABBA', 1);
