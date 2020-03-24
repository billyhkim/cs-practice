/* eslint-disable no-lonely-if */
/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

const search = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
};

const searchBS = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = ((left + right) / 2);

    if (nums[middle] < nums[right]) {
      if (target > nums[middle] && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle;
      }
    } else {
      if (target > nums[middle] || target < nums[left]) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }
  }

  return nums[left] === target ? left : -1;
};

search([4, 5, 6, 7, 0, 1, 2], 0);
searchBS([4, 5, 6, 7, 0, 1, 2], 0);
