function fibSeq(endLimit) {
  var sequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  var evenSum = 0;
  
  while (sequence[sequence.length - 1] < endLimit) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  sequence.pop();
  
  for (var i = 0; i < sequence.length; i++) {
    if(sequence[i] % 2 === 0) {
      evenSum += sequence[i];
    }
  }
  console.log(evenSum);
};

fibSeq(4000000);