function primeFactors(num) {
  let largestPossibleFactor = Math.floor(Math.sqrt(num));
  let primeFactor = 0;

  for (let i = 2; i <= largestPossibleFactor; i++) {
    if (largestPossibleFactor % i === 0) {
      primeFactor = largestPossibleFactor / i;

      if (primeFactor === 1) {
        primeFactor = i;
      } else {
        largestPossibleFactor = primeFactor;
      }
    }
  }

  console.log(primeFactor);
}

/*
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
*/