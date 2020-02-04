/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Note that an empty string is also considered valid.
*/

const map = {
  '}': '{',
  ')': '(',
  ']': '[',
}

const isValid = function(s) {
  if (s === '') return true;
  if (s.length === 1) return false;
  if (s.length % 2 === 1) return false;
  if (s[0] === ')' || s[0] === ']' || s[0] === '}') return false;

  let stack = [];

  for (let i = 0; i < s.length; i+=1) {
    const currentChar = s[i];
    const lastChar = stack[stack.length - 1];
    // deleteChar checks the map for corresponding "opening" char to be removed
    const deleteChar = map[currentChar];
    
    // if deleteChar exists or currentChar is a "closing" char
    if (deleteChar) {
      // if deleteChar from map is the same as the lastChar on the stack
      if (deleteChar === lastChar) {
        stack.pop();
      } else {
        // return false because of wrong order
        return false;
      }
    } else {
      stack.push(currentChar);
    }
  }
  
  console.log(stack.length, !stack.length);
  return !stack.length;
};

isValid('([])');