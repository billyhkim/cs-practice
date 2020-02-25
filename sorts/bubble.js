/*
1. Keep track of if at least one swap occurred during iteration.
2. Must execute sort from beginning of array each time to account for value to "bubble".
- Advantages: Easy to understand, easy to implement, in-place, no external memory is needed, best when array is almost sorted
- Disadvantages: Very expensive O(n^2), more element assignments than insertion sort
*/

const bubbleSort = (nums) => {
  let swapped = true;

  do {
    swapped = false;
    
    for (let i = 0; i < nums.length; i++) {
      let temp = nums[i];

      if (nums[i + 1] && nums[i] > nums[i + 1]) {
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
      console.log(nums);
    }
  } while (swapped);

  return nums;
};

// bubbleSort([9, 4, 8, 1, 2, 5]);
bubbleSort([51, 103, 107, 452, 145, 34, 315, 206, 384, 377, 318, 117, 244, 118, 371, 248, 102, 128, 172, 479, 168, 465, 232, 214, 280, 237, 147, 312, 56, 263, 4, 30, 459, 269, 464, 58, 174, 53, 123, 447, 285, 35, 351, 104, 161, 282, 8, 83, 488, 474, 160, 338, 498, 322, 500, 152, 348, 140, 98, 158, 85, 219, 205, 66, 142, 120, 24, 164, 393, 363, 450, 84, 394, 301, 258, 496, 490, 409, 295, 220, 365, 381, 359, 200, 94, 216, 457, 411, 436, 72, 334, 230, 477, 112, 229, 380, 122, 27, 41, 166]);