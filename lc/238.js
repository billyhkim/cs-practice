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

// optimized using front-to-back + back-to-front, accumulating multiplier
const productExceptSelfOpt = nums => {
  // 1. start with new array with all 1 (to prep for multiply)
  const result = new Array(nums.length).fill(1);
  // 2. multiplier initially equal to 1
  let multiplier = 1;
  
  // 3. forward iteration
  for (let i = 0; i < nums.length; i++) {
    // 3a. at current result value, multiply by accumulated multiplier (note: it will multiply all the accumulated multiples up to the value before itself)
    result[i] *= multiplier;
    // 3b. add multiple to the accumulated multiplier
    multiplier *= nums[i];
  }
  
  // 4. reset multiplier to go back-to-front
  multiplier = 1;
  
  // 5. backward iteration
  for (let j = nums.length - 1; j >= 0; j--) {
    // 5a. at current result value, multiply by reset accumulated multiplier
    result[j] *= multiplier;
    // 5b. add multiple to the multipler going other way
    multiplier *= nums[j];
  }
  
  return result;
};

productExceptSelfOpt([1, 2, 3, 4]);