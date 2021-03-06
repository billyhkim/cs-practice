/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

const phoneValues = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}

const letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  
  let result = [];

  const depthFirstSearch = (index, word) => {
    if (index < digits.length) {
      let letter = digits[index];
      phoneValues[letter].forEach((letter) => {
        depthFirstSearch(index + 1, word + letter);
      })
    } else {
      result.push(word);
    }
  }

  depthFirstSearch(0, '');
  console.log(result);
  return result;
};

letterCombinations('23');