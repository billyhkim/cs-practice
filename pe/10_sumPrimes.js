const { performance } = require('perf_hooks');

function sumPrimes(num) {
  let sum = 6;

  loop1:
  for (let i = 5; i < num; i += 2) {
    loop2:
    for (let j = i - 1; j > 1; j--) {
      if (i % j === 0) {
        break loop2;
      }
      if (j === 2 && i % 2 !== 0) {
        sum += i;
      }
    }
  }
  
  console.log(performance.now() * 1000);
  console.log(sum);
}

sumPrimes(2000000);