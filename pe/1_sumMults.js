function sumMults(num1, num2, limit) {
  let sum = 0;

  for (let i = 0; i < limit; i++) {
    if (i % num1 === 0 || i % num2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumMults(3, 5, 1000));