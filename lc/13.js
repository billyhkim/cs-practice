/*
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/

const romanToInt = function(s) {
  let total = 0;
  
  for (let i = 0; i < s.length; i += 1) {
    let cur = s[i];
    let next = s[i + 1];
    
    if (cur === 'C' && next === 'M') { 
      total += 900;
      i += 1;
    } else if (cur === 'C' && next === 'D') {
      total += 400;
      i += 1;
    } else if (cur === 'X' && next === 'C') {
      total += 90;
      i += 1;
    } else if (cur === 'X' && next === 'L') {
      total += 40;
      i += 1;
    } else if (cur === 'I' && next === 'X') {
      total += 9;
      i += 1;
    } else if (cur === 'I' && next === 'V') {
      total += 4;
      i += 1;
    } 
    else if (cur === 'M') total += 1000;
    else if (cur === 'D') total += 500;
    else if (cur === 'C') total += 100;
    else if (cur === 'L') total += 50;
    else if (cur === 'X') total += 10;
    else if (cur === 'V') total += 5;
    else if (cur === 'I') total += 1;
  }

  return total;
};

romanToInt('MCMXCIV');