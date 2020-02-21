/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up: Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

// brute force timeout o^n2
const productExceptSelf = nums => {
  let results = [];
  
  for (let i = 0; i < nums.length; i++) {
    let clonedArr = [...nums];
    clonedArr.splice(i, 1);
    
    const mult = clonedArr.reduce((acc, num) => {
      return acc *= num;
    }, 1);
    
    results.push(mult);
  }
  
  return results;
};