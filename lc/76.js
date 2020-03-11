/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"

Note:
If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

const minWindow = function(s, t) {
  const map = t.split('').reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : acc[cur] = 1;
    return acc;
  }, {});
  let left = 0, right = 0, count = Object.keys(map).length, result = '';

  while (right <= s.length) {
    if (count !== 0) {
      const rightChar = s[right];
      if (map[rightChar] !== null) map[rightChar]--;
      if (map[rightChar] === 0) count--;
      right++;
    } else {
      const leftChar = s[left];
      if (map[leftChar] !== null) map[leftChar]++;
      if (map[leftChar] > 0) count++;
      
      let currentWindow = s.substring(left, right + 1);
      if (result === '') {
        result = currentWindow;
      } else {
        result = result.length < currentWindow.length ? result : currentWindow;
      }
      left++;
    }
  }

  return result;
};

minWindow('ADOBECODEBANC', 'ABC');