/*
Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
*/

function possibleNumberLetters(digitString) {
  const digitMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
  };
  const digitArray = digitString.split('');
  let comboArray = [];

  for (let i = 0; i < digitMap[digitArray[0]].length; i++) {
    for (let j = 0; j < digitMap[digitArray[1]].length; j++) {
      comboArray.push(digitMap[digitArray[0]][i] + digitMap[digitArray[1]][j]);
    }
  }

  console.log(comboArray);
}

possibleNumberLetters('23');