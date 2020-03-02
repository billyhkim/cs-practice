/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).
*/

const fib = function(N) {
  const fibArr = [];
  
  for (let i = 0; i <= N; i++) {
    if (i === 0) {
      fibArr.push(0);
      continue;
    }
    if (i === 1) {
      fibArr.push(1);
      continue;
    }
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }
  
  return fibArr[fibArr.length - 1];
};

const fibOpt = function(N) {
  let fibSeq = [0, 1];
  if (N === 0) return fibSeq[0];
  if (N === 1) return fibSeq[1];

  for (let i = 2; i <= N; i++) {
    fibSeq.push(fibSeq[i-1] + fibSeq[i-2]);
  }

  return fibSeq[fibSeq.length - 1];
};

fib(4);