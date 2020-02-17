/*
find a pair the first pair of numbers from an unsorted array that add up to a target number

input: number[] , number
output: [number, number] | ‘no pairs found’;

example inputs:
[3,4,2,1,4,7,8] , 8
=> [4,4]

example inputs:
[1,5,2,4,9,5] , 8
=> ‘no pairs found’
*/

const firstPairSum = (arr, target) => {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(arr[i], arr[j]);
        console.log(result);
        return result;
      }
    }
  }

  if (result.length === 0) return 'no pairs found';
  return result;
};

const firstPairSumOpt = (arr, target) => {
  const numMap = {};

  for (let i = 0; i < arr.length; i++) {
    if (numMap[target - arr[i]]) {
      console.log([arr[i], numMap[target - arr[i]]]);
      return [arr[i], numMap[target - arr[i]]];
    }

    numMap[arr[i]] = arr[i];
  }

  if (result.length === 0) return 'no pairs found';
};

// firstPairSum([3,4,2,1,4,7,8], 8);
// firstPairSum([1,5,2,4,9,5], 8);
firstPairSumOpt([3,4,2,1,7,8], 8);
