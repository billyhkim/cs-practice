/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
Find the minimum element. You may assume no duplicate exists in the array.

Example 1:
Input: [3,4,5,1,2] 
Output: 1

Example 2:
Input: [4,5,6,7,0,1,2]
Output: 0
*/

const findMin = function(nums) {
  let result = nums[0];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < result) {
      result = nums[i];
    }
  }
  
  return result;
};

const findMinOneLine = nums => {
  return Math.min(...nums);
};

findMin([3,4,5,1,2]);