function primeCheck(num) {
  let divisor = 2;
  for (divisor; divisor < Math.ceil(num / 2); divisor++) {
    if (num % divisor === 0) {
      console.log(false, divisor);
      return false;
    }
  }
  console.log(true, divisor);
  return true;
}

primeCheck(4483);