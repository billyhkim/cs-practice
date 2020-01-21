/*
Given a 32-bit signed integer, reverse digits of an integer.
*/

var reverse = function(x) {
  if (x === 0) return 0;
  
  let num;
  let numStr;
  let numStrReversed;
  let finalNum;
  
  if (x < 0) {
    num = +x;
    numStr = x + '';
    numStrReversed = '-' + numStr.split('').reverse().join('');
  } else {
    num = x;
    numStr = x + '';
    numStrReversed = numStr.split('').reverse().join('');
  }

  finalNum = parseInt(numStrReversed, 10);
  
  if (finalNum > 2147483647 || finalNum < -2147483647) {
    return 0;
  }
  return finalNum;
};