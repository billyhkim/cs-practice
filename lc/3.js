/*
Given a string, find the length of the longest substring without repeating characters.
*/
var lengthOfLongestSubstring = function(s) {
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

lengthOfLongestSubstring("abcabcbb");