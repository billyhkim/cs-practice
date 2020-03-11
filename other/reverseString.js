function reverseStringLoop(s) {
  let result = '';

  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }

  console.log(result);
  return result;
}

reverseStringLoop('hello world');

function reverseStringHigherOrder(s) {
  const reversedStr = s.split('').reverse().join('');
  console.log(reversedStr);
  return reversedStr;
}

reverseStringHigherOrder('hello world');