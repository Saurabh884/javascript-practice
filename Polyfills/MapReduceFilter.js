//map

// const arr = [2, 3, 4, 5];

// const res = arr.map((elem, index, array) => {
//   return elem * 2;
// });

// console.log(res);

//Polyfill of map

// const nums = [2, 3, 4, 5];
// Array.prototype.myMap = function (callback) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }

//   return result;
// };

// const output = nums.myMap((elem) => {
//   return elem * 2;
// });

// console.log(output);

//Filter

// const nums2 = [2, 3, 4, 5];

// const res = nums2.filter((elem, index, array) => {
//   return elem > 3;
// });

// console.log(res);

//Polyfill of filter

// const nums2 = [2, 3, 4, 5];

// Array.prototype.myFilter = function (cb) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }

//   return result;
// };

// const output = nums2.myFilter((elem) => {
//   return elem > 2;
// });
// console.log(output);

//reduce

// const arr = [2, 3, 4, 5];

// const mul = arr.reduce((acc, elem, ind, array) => {
//   return acc * elem;
// }, 1);

// console.log(mul);

//Polyfills of reduce

// Array.prototype.myReduce = function (cb, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = cb(accumulator, this[i], i, this);
//   }
//   return accumulator;
// };

// const arr2 = [2, 3, 4, 5];

// const result = arr2.myReduce((acc, elem) => {
//   return acc * elem;
// }, 1);

// console.log(result);
