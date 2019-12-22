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

  var longestSubstringLength = 0;

  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j <= s.length; j++) {
      if (duplicateCheck(s, i, j)) {
        longestSubstringLength = Math.max(longestSubstringLength, j - i);
      }
    }
  }

  return longestSubstringLength;
};

var duplicateCheck = function(string, start, end) {
  var stringSet = new Set();

  for (var i = start; i < end; i++) {
    var stringValue = string.charAt(i);

    if (stringSet.has(stringValue)) {
      return false;
    }

    stringSet.add(stringValue);
  }

  return true;
}

lengthOfLongestSubstring("dvdf");