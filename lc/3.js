/*
Given a string, find the length of the longest substring without repeating characters.
*/
var lengthOfLongestSubstring = function(s) {
  // var stringArray = s.split('');
  // var longestSubstring = '';
  // var newString = '';
  
  // // log every substring before a repeating character
  // for (var i = 0; i < stringArray.length; i++) {
  //   if (!newString.includes(stringArray[i])) {
  //     newString += stringArray[i]; 
  //   } else {
  //     if (newString.length > longestSubstring.length) {
  //       longestSubstring = newString;
  //     }
  //     newString = '';
  //     newString += stringArray[i];
  //   }
  // }

  // if (newString.length > longestSubstring.length) {
  //   longestSubstring = newString;
  // }

  // return longestSubstring.length;

  var longestSubstringLength = 0, i = 0, j = 0;
  var stringSet = new Set();

  while (i < s.length && j < s.length) {
    if (!stringSet.has(s.charAt(j))) {
      stringSet.add(s.charAt(j++));
      longestSubstringLength = Math.max(longestSubstringLength, j - i);
    } else {
      stringSet.delete(s.charAt(i++));
    }
  }

  console.log(longestSubstringLength);
  return longestSubstringLength;
};

lengthOfLongestSubstring("dvdf");