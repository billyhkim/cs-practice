/*
Given a string, determine if you can remove any character to create a palindrome.

Here's some examples and some starter code:
    def create_palindrome(s):
      # Fill this in.

    print(create_palindrome("abcdcbea"))
    # True
    print(create_palindrome("abccba"))
    # False
    print(create_palindrome("abccaa"))
    # False
*/

const removeCharPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('');
  if (str === reversedStr) return false;
  
  let i = 0;
  let removedStr = str;
  while (i < str.length / 2) {
    for (let j = str.length - 1; j >= 0; j-=1) {
      const frontChar = removedStr[i];
      const backChar = removedStr[j];
      if (frontChar !== backChar) {
        if (frontChar === str[j - 1]) {
          removedStr = removedStr.slice(0, j) + removedStr.slice(j + 1);
          j-=1;
        } else if (str[i + 1] === backChar) {
          removedStr = removedStr.slice(0, i) + removedStr.slice(j);
          i+=1;
        }
      }
      i+=1;
    }
    i+=1;
  }

  let reversedRemovedStr = removedStr.split('').reverse().join('');
  console.log(reversedRemovedStr, removedStr);
  if (removedStr === reversedRemovedStr) return true;
}

removeCharPalindrome('abcdcbea');