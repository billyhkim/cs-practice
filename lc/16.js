/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example: Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

const threeSumClosest = function(nums, target) {
  if (nums.length < 3) return 0;
  let closestSum;

  loop1:
  for (let i = 0; i < nums.length; i+=1) {
    for (let j = i + 1; j < nums.length; j+=1) {
      for (let k = j + 1; k < nums.length; k+=1) {
        let sum = nums[i] + nums[j] + nums[k];
        if (!closestSum) closestSum = sum;
        
        if (sum === target) {
          closestSum = sum;
          break loop1;
        } else if (sum !== target && Math.abs(target - sum) < Math.abs(target - closestSum)) {
          closestSum = sum;
        }
      }
    }
  }
  console.log(closestSum);
  return closestSum;
};

// threeSumClosest([-1, 2, 1, -4], 1);
threeSumClosest([-1, 0, 1, 2, -1, -4], 0);