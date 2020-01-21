/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
*/

const isPalindrome = function(x) {
  let numStr = x + '';
  let reversedInt = numStr.split('').reverse().join('');
  
  if (numStr === reversedInt) return true;
  return false;
};