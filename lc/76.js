/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"

Note:
If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

const minWindow = (s, t) => {
  // 1. create character map of t
  const map = t.split('').reduce((acc, cur) => {
    // eslint-disable-next-line no-unused-expressions
    acc[cur] ? acc[cur]++ : acc[cur] = 1;
    return acc;
  }, {});
  // 2. initialize left and right pointers, as well as count to track when any char count in t goes to 0
  let left = 0;
  let right = -1;
  let count = Object.keys(map).length;
  let result = '';

  // 3. continue loop based on right pointer
  while (right <= s.length) {
    // 4. while suitable window has not been fulfilled
    if (count !== 0) {
      right++;
      const rightChar = s[right];
      // if current char is in map, decrement char
      if (map[rightChar] !== null) map[rightChar]--;
      // if current char in t is fulfilled, decrement count
      if (map[rightChar] === 0) count--;
    } else {
      // if the window has been satisfied, move left pointer forward
      const leftChar = s[left];
      // check current left char and increment on map because will now be disregarded
      if (map[leftChar] !== null) map[leftChar]++;
      // if left char is greater than 0 now, increase the count since window is no longer satisfied
      if (map[leftChar] > 0) count++;

      const currentWindow = s.substring(left, right + 1);
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
