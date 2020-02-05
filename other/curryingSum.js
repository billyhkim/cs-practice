/*
Return the same answer with one summing function for:
sum(2, 3) && sum(2)(3)

Currying example: https://theanubhav.com/2019/02/03/js-currying-in-interview/
*/

function sum(a, b) {
  // in the event that there is no 2nd argument
  if (b === undefined) {
    // must be able to return 
    return function(c) {
      console.log('inside:', a + c);
      return a + c;
    }
  }
  console.log('outside:', a + b);
  return a + b;
}

sum(2)(3);
sum(2, 5);