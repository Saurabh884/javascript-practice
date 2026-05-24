//1) Reverse an array

//1st approach

// const arr = [2, 3, 4, 5, 6];
// const res = arr.reverse();
// console.log(res);

//2nd approach

//Reverse an array using two pointer technique

// const arr = [2, 3, 4, 5, 6];
// const reverseArray = (arr) => {
//   for (i = 0, j = arr.length - 1; i < j; i++, j--) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// };
// console.log(reverseArray(arr));

//-------------------------------------------------------------------------------------->

//2) Find maximum element in an array

//1st approach - sorting
// const arr = [2, 3, 4, 5, 6, 6];

// const unique = Array.from(new Set(arr));
// const res = arr[arr.length - 1];
// console.log(res);

//2nd approach - object method

// const arr = [2, 3, 4, 5, 6, 6];

// const findMax = (arr) => {
//   let obj = {};
//   let largest = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//   }

//   for (let key in obj) {
//     if (key > largest) {
//       largest = key;
//     }
//   }
//   return largest;
// };

// console.log(findMax(arr));

//3rd approach using for of array loop
//Note - for of loop in array is used for iterating on elems but for in used for indices

// const arr = [6, 5, 4, 3, 2, 1];

// const getMax = (arr) => {
//   let max = arr[0];

//   for (num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// };
// console.log(getMax(arr));

//------------------------------------------------------------------------------->

//3) Find minimum elem in an array

// const nums = [2, 3, 4, 5, 6];

// const min = (nums) => {
//   let minimum = nums[0];

//   for (elem of nums) {
//     if (elem < minimum) {
//       minimum = elem;
//     }
//   }
//   return minimum;
// };
// console.log(min(nums));

//------------------------------------------------------------------------------>

//4 find sum of array elements

//1st approach -> using reuce

// const arr = [2, 3, 4, 5, 6];

// const res = arr.reduce((acc, elem) => {
//   return acc + elem;
// }, 0);

// console.log(res);

//2nd approach  Using for of LOOP method

// const arr = [2, 3, 4, 5, 6];

// const sumAll = (arr) => {
//   let sum = 0;
//   for (let elem of arr) {
//     sum += elem;
//   }
//   return sum;
// };

// console.log(sumAll(arr));

//----------------------------------------------------------------------------->

// 5)Find Second Largest Element in an array

// 1st Approach by sort

// const arr = [3, 4, 5, 6];

// const sorted = arr.sort((a, b) => {
//   return b - a;
// });

// console.log(sorted[1]);

//2nd approach

// const arr = [2, 3, 4, 5, 6];

// const findSecondlargest = (arr) => {
//   let largest = Number.NEGATIVE_INFINITY;
//   let secondLargest = Number.NEGATIVE_INFINITY;

//   for (num of arr) {
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num !== largest && num > secondLargest) {
//       secondLargest = num;
//     }
//   }
//   return secondLargest;
// };
// console.log(findSecondlargest(arr));

//---------------------------------------------------------------------------->

//6. Remove Duplicates from Array

//1st approach -- by creating set

// const arr = [2, 3, 3, 4, 5, 6, 7, 8];

// const uniq = Array.from(new Set(arr));
// console.log(uniq);

//2nd approach

// const arr = [2, 4, 4, 3, 7, 9, 2];
// const output = arr.reduce((acc, elem) => {
//   if (!acc.includes(elem)) {
//     acc.push(elem);
//   }
//   return acc;
// }, []);
// console.log(output);

//3rd approach --- object method

// const arr = [2, 3, 4, 5, 6, 2, 2, 4];

// const removeDuplicates = (arr) => {
//   const obj = {};
//   const uniq = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]]++;
//     } else {
//       obj[arr[i]] = 1;
//     }

//     // obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//   }

//   for (let key in obj) {
//     uniq.push(JSON.parse(key));
//   }
//   return uniq;
// };
// console.log(removeDuplicates(arr));

// 3rd approach - second way

// const arr = [2, 3, 4, 5, 6, 2, 2, 4];

// const removeDuplicates = (arr) => {
//   const obj = {};
//   const uniq = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = true;
//       uniq.push(arr[i]);
//     }
//   }
//   return uniq;
// };
// console.log(removeDuplicates(arr));

//4th approach -> Using for of loop

//Note : 2,3,4,"hello", [] ,{}. ---> These are trated as true
//false, 0, "", null, undefined, NaN ---> These are falsy value

// const arr = [2, 3, 4, 3, 4, 2, 6, 7];

// const uniqueArr = (arr) => {
//   let uniq = [];
//   let obj = {};

//   for (let elem of arr) {
//     if (!obj[elem]) {
//       obj[elem] = true;
//       uniq.push(elem);
//     }
//   }
//   return uniq;
// };
// console.log(uniqueArr(arr));

//------------------------------------------------------------------->

//7. Check if Array Contains Duplicate

// const arr = [1, 2, 3, 2];

// const hasDuplicate = (arr) => {
//   return new Set(arr).size !== arr.length;
// };
// console.log(hasDuplicate(arr));

//--------------------------------------------------------------->

//8. Rotate Array by K Positions - two pointer technique
//const arr = [1, 2, 3, 4, 5];  const k = 2; output:[4, 5, 1, 2, 3]
// Step 1: Reverse whole array
// Step 2: Reverse first k elements
// Step 3: Reverse remaining elements
//Note k = k % 2 ; Remainder will be 2

// const rotatedArray = (arr, k) => {
//   let n = arr.length;
//   k = k % n;

//   const reverse = (arr, left, right) => {
//     while (left < right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//   };

//   reverse(arr, 0, n - 1);
//   reverse(arr, 0, k - 1);
//   reverse(arr, k, n - 1);

//   return arr;
// };

// console.log(rotatedArray([1, 2, 3, 4, 5], 2));

//-------------------------------------------------------------------------------->

//9. Find Missing Number - Array contains numbers from 1 to n
//Note formula - (n * (n + 1)) / 2

// const arr = [1, 2, 4, 5];

// const findMissingNumber = (arr) => {
//   let n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((acc, elem) => {
//     return acc + elem;
//   }, 0);

//   return expectedSum - actualSum;
// };
// console.log(findMissingNumber(arr));

//------------------------------------------------------------------------------->

//10. Move All Zeros to End

// const arr = [2, 3, 0, 1, 5, 0, 9, 0];

// const moveAllZero = (arr) => {
//   let result = [];

//   for (let num of arr) {
//     if (num !== 0) {
//       result.push(num);
//     }
//   }

//   while (result.length < arr.length) {
//     result.push(0);
//   }
//   return result;
// };

// console.log(moveAllZero(arr));

//--------------------------------------------------------------------------------------->

// 11. Find Intersection of Two Arrays

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// const res = arr1.filter((elem) => arr2.includes(elem));
// console.log(res);

//------------------------------------------------------------------>

// 12. Find Union of Two Arrays

// const arr1 = [1, 2];
// const arr2 = [2, 3, 4];

// const combinedArray = new Set([...arr1, ...arr2]);
// const res1 = [...combinedArray];
// const res2 = Array.from(combinedArray);
// console.log(res1, res2);

//------------------------------------------------------------------>

// 13. Find Frequency of Elements in an array

// const arr = [2, 2, 3, 3, 3, 4, 4, 4, 4, 1];

// const findFrequency = (arr) => {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//   }
//   return obj;
// };
// console.log(findFrequency(arr));

//14. Find maximum occuring element in an array

// const arr = [2, 5, 7, 11, 2, 11, 4, 11, 5, 11];

// const findMaxOccElem = (arr) => {
//   let obj = {};
//   let maxOcc = Number.NEGATIVE_INFINITY;
//   let maxElem = Number.NEGATIVE_INFINITY;

//   for (let elem of arr) {
//     obj[elem] = (obj[elem] || 0) + 1;
//   }

//   for (let key in obj) {
//     if (obj[key] > maxOcc) {
//       maxOcc = obj[key];
//       maxElem = key;
//     }
//   }
//   return maxElem;
// };

// console.log(findMaxOccElem(arr));

//------------------------------------------------------------------------->

// 15) - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// let nums = [2, 7, 11, 15];
// let target = 9;

// const twoSum = (nums, target) => {
//   let obj = {};

//   for (let i = 0; i < nums.length; i++) {
//     let n = nums[i];
//     if (obj[target - n] >= 0) {
//       return [obj[target - n], i];
//     } else {
//       obj[n] = i;
//     }
//   }
// };

// console.log(twoSum(nums, target));

//------------------------------------------------------------>

// 16. Kadane’s Algorithm (Maximum Subarray Sum)
// Note - i always starts with 1å

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// const maxSumofSubarry = (arr) => {
//   let currentSum = arr[0];
//   let maxSum = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// };

// console.log(maxSumofSubarry(arr));

//--------------------------------------------------------------------------------->

// 17. Best Time to Buy and Sell Stock
//Note when price will be min and profit will be max

// const prices = [7, 1, 5, 3, 6, 4];

// const bestTime = (prices) => {
//   let profit = 0;
//   let minPrice = Infinity;

//   for (let price of prices) {
//     minPrice = Math.min(minPrice, price);
//     profit = Math.max(profit, price - minPrice);
//   }
//   return profit;
// };

// console.log(bestTime(prices));

//18 Merge Two Sorted Arrays

//1st Approach

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];

// const mergedArray = [...arr1, ...arr2].sort((a, b) => {
//   return a - b;
// });
// console.log(mergedArray);

//2nd approach
//Note run 3 while loop

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];

// let i = 0;
// let j = 0;
// let sortedArray = [];

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     sortedArray.push(arr1[i]);
//     i++;
//   } else {
//     sortedArray.push(arr2[j]);
//     j++;
//   }
// }

// while (i < arr1.length) {
//   sortedArray.push(arr1[i++]);
// }

// while (j < arr2.length) {
//   sortedArray.push(arr2[j++]);
// }

// console.log(sortedArray);

//---------------------------------------------------------------------->

// 19.Binary Search of in sorted array

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const target = 5;

// const findTarget = (arr, target) => {
//   let left = 0;
//   let right = arr.length;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };
// console.log(findTarget(arr, target));

//--------------------------------------------------------------------->

// 20. Flatten Nested Array

//1st approach

// const arr = [1, [2, [3, 4]], 5];

// const flattenedArr = arr.flat(2);
// console.log(flattenedArr);

//2nd approach
const arr = [1, [2, [3, 4]], 5];

const flattenedArr = (arr) => {
  let result = [];

  for (let num of arr) {
    if (Array.isArray(num)) {
      result = result.concat(flattenedArr(num));
    } else {
      result.push(num);
    }
  }
  return result;
};
console.log(flattenedArr(arr));
