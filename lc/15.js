/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.
*/

const threeSum = (numsArr) => {
  let resultArr = [];
  if (numsArr.length < 3) return resultArr;
  numsArr = numsArr.sort((a, b) => a - b);
  let target = 0;

  for (let i = 0; i < numsArr.length - 2; i+=1) {
    if (numsArr[i] > target) break;
    if (i > 0 && numsArr[i] === numsArr[i - 1]) continue;

    let j = i + 1;
    let k = numsArr.length - 1;

    while (j < k) {
      let sum = numsArr[i] + numsArr[j] + numsArr[k];

      if (sum === target) {
        resultArr.push([numsArr[i], numsArr[j], numsArr[k]]);

        while (numsArr[j] === numsArr[j + 1]) j+=1;
        while (numsArr[k] === numsArr[k - 1]) k-=1;

        j+=1;
        k-=1;
        continue
      }
      if (sum < target) {
        j+=1;
        continue;
      }
      if (sum > target) {
        k-=1;
        continue;
      }
    }
  }
  console.log(resultArr);
  return resultArr;
};

// const threeSum = (numsArr) => {
//   numsArr.sort((a, b) => a - b);
//   let resultArr = [];

//   for (let i = 0; i < numsArr.length; i+=1) {
//     for (let j = i + 1; j < numsArr.length; j+=1) {
//       for (let k = j + 1; k < numsArr.length; k+=1) {
//         if (numsArr[i] + numsArr[j] + numsArr[k] === 0) {
//           resultArr.push([numsArr[i], numsArr[j], numsArr[k]]);
//         }
//       }
//     }
//   }

//   for (let i = 0; i < resultArr.length; i += 1) {
//     for (let j = i + 1; j < resultArr.length; j += 1) {
//       if (resultArr[i].sort().join(',') === resultArr[j].sort().join(',')) {
//         resultArr.splice([j], 1);
//         j -= 1;
//       }
//     }
//   }

//   console.log(resultArr)
//   return resultArr;
// };

// threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1]);