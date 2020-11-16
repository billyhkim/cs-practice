/*
Reverse Array of Characters In-Place
*/

function reverse(array) {
  let count = 1;
  const charCopy = JSON.parse(JSON.stringify(array));

  for (let i = 0; i < array.length; i++) {
    array[i] = charCopy[array.length - count];
    count++;
  }

  return array;
}

function reverse2Pointers(array) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    const currChar = array[leftPointer];
    array[leftPointer] = array[rightPointer];
    array[rightPointer] = currChar;

    leftPointer++;
    rightPointer--;
  }

  return array;
}

reverse2Pointers(['c', 'a', 't']);
