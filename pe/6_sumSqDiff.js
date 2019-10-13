function sumSqDiff() {
  let sumOfSquares = 0; 
  let squareOfSum100 = 0;

  for (let i = 1; i <= 100; i++) {
    sumOfSquares = sumOfSquares + Math.pow(i, 2);
  }

  for (let j = 1; j <= 100; j++) {
    squareOfSum100 = squareOfSum100 + j;

    if (j === 100) {
      squareOfSum100 = Math.pow(squareOfSum100, 2);
    }
  }

  console.log(`difference = ${squareOfSum100 - sumOfSquares}`);
}

sumSqDiff();