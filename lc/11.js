/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
*/

const maxArea = function(height) {
  let currentArea = 0;
  let currentMaxArea = 0;
  let xDiff = 0;
  let currentMultipliableHeight = 0;
  
  for (let i = 0; i < height.length; i += 1) {
    for (let j = 1; j < height.length; j += 1) {
      height[i] < height[j] ? currentMultipliableHeight = height[i] : currentMultipliableHeight = height[j];
      xDiff = Math.abs(i - j);
      
      currentArea = xDiff * currentMultipliableHeight;
      if (currentArea > currentMaxArea) currentMaxArea = currentArea;
    }
  }
  
  return currentMaxArea;
};