//map

// const arr = [2, 3, 4, 5, 6];

// const result = arr.map((elem, index, array) => {
//   return elem * 2;
// });

// console.log(result);

//-------------------------------------------->

//reduce

//Sum of an array using reduce

// const arr = [2, 3, 4, 5];
// const result = arr.reduce((acc, elem, index, arr) => (acc += elem), 0);
// console.log(result);

//Multiplication of all nums using reduce

// const array = [1, 2, 3, 4];

// const res = array.reduce((acc, currentValue) => {
//   return acc * currentValue;
// }, 1);

// console.log(res);

//Character frequency by using reduce

// const nums = [2, 3, 4, 5, 2, 3, 1];

// const res = nums.reduce((acc, cv) => {
//   if (acc[cv]) {
//     acc[cv]++;
//   } else {
//     acc[cv] = 1;
//   }

//   return acc;
// }, {});
// console.log(res);

//Second way of writing character frequency

// const nums1 = [2, 2, 1, 3, 4];

// const res = nums1.reduce((acc, elem) => {
//   acc[elem] = (acc[elem] || 0) + 1;
//   return acc;
// }, {});

// console.log(res);

//Flatten an array using reduce

// const arr = [[1, 2], [3, 4], [5]];

// const res = arr.reduce((acc, elem) => {
//   return acc.concat(elem);
// }, []);
// console.log(res);

//Find maximum in array using reduce

// const arr = [10, 40, 5, 99, 20];

// const max = arr.reduce((acc, elem) => {
//   return elem > acc ? elem : acc;
// }, arr[0]);
// console.log(max);

//Remove duplicates using reduce method

// const arr = [1, 2, 2, 3, 4, 4];
// const unique = arr.reduce((acc, elem) => {
//   if (!acc.includes(elem)) {
//     acc.push(elem);
//   }
//   return acc;
// }, []);

// console.log(unique);

// Convert Array to Object

// const users = [
//   { id: 1, name: "Saurabh" },
//   { id: 2, name: "Rahul" },
// ];

// const res = users.reduce((acc, elem) => {
//   acc[elem.id] = elem.name;
//   return acc;
// }, {});
// console.log(res);

//Group By Property

// const users = [
//   { name: "Saurabh", age: 25 },
//   { name: "Rahul", age: 25 },
//   { name: "Amit", age: 30 },
// ];

// const grouped = users.reduce((acc, user) => {
//   const age = user.age;

//   if (!acc[age]) {
//     acc[age] = [];
//   }

//   acc[age].push(user.name);

//   return acc;
// }, {});

// console.log(grouped);

//filter

// const arr = [2, 3, 4, 5, 6];

// const result = arr.filter((elem) => {
//   return elem > 5;
// });

// console.log(result);

//forEach

// const nums = [2, 3, 4, 5];

// nums.forEach((elem) => {
//   console.log(elem + 2);
// });
