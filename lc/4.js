/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.
*/

var findMedianSortedArrays = function(nums1, nums2) {
  var sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  var sortedArrayLength = sortedArray.length;
  
  if (sortedArray.length % 2 === 1) {
    return sortedArray[Math.floor(sortedArrayLength / 2)];
  } else {
    return (sortedArray[(sortedArrayLength / 2) - 1] + sortedArray[sortedArrayLength / 2]) / 2;
  }
};

