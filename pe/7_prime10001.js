function findPrimeNum(num) {
  let primeNumArr = [2];

  loop1:
  for (let i = 3; i < Infinity; i++) {
    loop2:
    for (let j = i - 1; j > 1; j--) {
      if (i % j === 0) {
        break loop2;
      }
      if (j === 2 && i % 2 !== 0) {
        primeNumArr.push(i);
        if (primeNumArr.length === num) {
          break loop1;
        }
      }
    }
  }

  console.log(primeNumArr[num - 1]);
}

findPrimeNum(10001);