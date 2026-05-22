//Find occurances of each element in an array in form of object

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const findOccurance = (nums) => {
//   let obj = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]]) {
//       obj[nums[i]]++;
//     } else {
//       obj[nums[i]] = 1;
//     }
//   }
// //   return Object.keys(obj);
//   return obj;
// };

// const res = findOccurance(fruits);
// console.log(res);

//---------------------------------------------------------------------->

// Find Second largest number in an array

// const array = [2, 45, 67, 7, 9, 34, 34];

//First Approach

// const secondLargest = (arr) => {
//   const uniquSet = new Set(arr);
//   console.log(uniquSet);

//   const newArr = Array.from(uniquSet);
//   console.log(newArr);
//   const sorted = newArr.sort((a, b) => {
//     return b - a;
//   });
//   return sorted[1];
// };
// const res = secondLargest(array);
// console.log(res);

//Second approach

// const secondLargest = (arr) => {
//   let largest = Number.NEGATIVE_INFINITY;
//   let secondLargest = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] !== largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// };

// const result = secondLargest(array);
// console.log(result);

//----------------------------------------------------->

// first approach
// const arr = [2, 3, 4, 5, 6, 6];

// const findLargest = (arr) => {
//   arr.sort((a, b) => {
//     return b - a;
//   });
//   return arr[0];
// };

// const output = findLargest(arr);
// console.log(output);

//2nd approach

// const arr = [2, 3, 4, 5, 6, 6];

// const output = arr.reduce((acc, elem) => {
//   return elem > acc ? elem : acc;
// }, arr[0]);
// console.log(output);

//3rd approach
// const arr = [2, 3, 4, 5, 6, 8];
// const findLargest = (arr) => {
//   let largest = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// };

// console.log(findLargest(arr));

//---------------------------------------------------------------------->

// find smallest number in an array

// const arr = [2, 3, 4, 5, 6, 8];
// const findSmallest = (arr) => {
//   let smallest = Number.POSITIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < largest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// };

// console.log(findSmallest(arr));

//-------------------------------------------------------------->

//Remove duplicates from array

//1st approach

// const arr = [2, 3, 3, 5, 4, 6];

// const newSet = new Set(arr);

// const uniqueArr = Array.from(newSet);

// console.log(uniqueArr);

//2nd approach

// const arr = [2, 3, 3, 5, 4, 6];

// const res = arr.reduce((acc, elem) => {
//   if (!acc.includes(elem)) {
//     acc.push(elem);
//   }
//   return acc;
// }, []);

// console.log(res);

//3rd approach

// const arr = [2, 3, 3, 5, 4, 6];

// const removeDuplicates = (arr) => {
//   let uniqueArr = [];

//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = true;
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// };

// console.log(removeDuplicates(arr));

//------------------------------------------------------------>

//find largest occurance of element

// const arr = [2, 3, 5, 6, 7, 8, 8, 8, 6];

// const mostOccuredElem = (arr) => {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]]++;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }

//   let largest = Number.NEGATIVE_INFINITY;

//   for (let key in obj) {
//     if (obj[key] > largest) {
//       largest = obj[key];
//       largest = key;
//     }
//   }
//   return largest;
// };
// console.log(mostOccuredElem(arr));

//------------------------------------------------------------------------>

// Ques - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

let nums = [2, 7, 11, 15];
let target = 9;

const twoSum = (nums, target) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSum(nums, target));
