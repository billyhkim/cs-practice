function primeFactors(num) {
  let currentSmallestDivisor = 2;
  let primeFactorsArr = [];

  // while (currentNum % 2 === 0) {
  //   num = num / 2;
  //   primeFactors.push(2);
  // }

  while (num >= (currentSmallestDivisor * currentSmallestDivisor)) {
    if (num % currentSmallestDivisor === 0) {
      primeFactorsArr.push(currentSmallestDivisor);
      num = num / currentSmallestDivisor;
    } else {
      currentSmallestDivisor++;
    }
  }

  console.log(primeFactorsArr);
  // return primeFactorsArr[primeFactorsArr.length - 1];
}