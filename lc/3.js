/*
Given a string, find the length of the longest substring without repeating characters.
*/
const lengthOfLongestSubstring = s => {
  var stringArray = s.split('');
  var longestSubstring = '';
  var newString = '';
  
  // log every substring before a repeating character
  for (var i = 0; i < stringArray.length; i++) {
    if (!newString.includes(stringArray[i])) {
      newString += stringArray[i]; 
    } else {
      if (newString.length > longestSubstring.length) {
        longestSubstring = newString;
      }
      newString = '';
      newString += stringArray[i];
    }
  }

  if (newString.length > longestSubstring.length) {
    longestSubstring = newString;
  }

  return longestSubstring.length;
};

lengthOfLongestSubstring("dvdf");

const lengthOfLongestSubstringOpt = s => {
  let longestSubstringLength = 0;
  let i = 0;
  let j = 0;
  let stringSet = new Set();

  while (i < s.length && j < s.length) {
    if (!stringSet.has(s[j])) {
      stringSet.add(s[j++]);
      longestSubstringLength = Math.max(longestSubstringLength, j - i);
    } else {
      stringSet.delete(s[i++]);
    }
  }

  return longestSubstringLength;
}

lengthOfLongestSubstringOpt("pwwkeyw");