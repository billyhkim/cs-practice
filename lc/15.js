/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.
*/

const threeSum = (numsArr) => {
  let resultArr = [];

  for (let i = 0; i < numsArr.length; i+=1) {
    for (let j = i + 1; j < numsArr.length; j+=1) {
      for (let k = j + 1; k < numsArr.length; k+=1) {
        if (numsArr[i] + numsArr[j] + numsArr[k] === 0) {
          resultArr.push([numsArr[i], numsArr[j], numsArr[k]]);
        }
      }
    }
  }

  console.log(resultArr);
  return resultArr;
};

threeSum([-1, 0, 1, 2, -1, -4]);