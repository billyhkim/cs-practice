/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

const maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  
  let result = nums[0];
  let sum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i];
    if (sum > result) result = sum;
    
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > result) result = sum;
    }
  }
  
  return result;
};

const maxSubArrayOpt1 = function(nums) {
  let sum = nums[0];
  let result = sum;

  for (let i = 1; i < nums.length; i++) {
      sum += nums[i];
      if (nums[i] > sum) sum = nums[i];
      if (sum > result) result = sum;
  }
  return result;
};

const maxSubArrayOpt2 = function(nums) {
  let currentMax = nums[0];
  let globalMax = nums[0];

  for (let i = 0; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    globalMax = Math.max(globalMax, currentMax);
  }

  return globalMax;
}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
maxSubArrayOpt2([-2,1,-3,4,-1,2,1,-5,4]);