//1)
// const user = {
//   name: "Saurabh",
//   city: "Bangalore",
// };
// //modify any property
// user.name = "Puneet";
// console.log(user);

// //delete any property
// delete user.city;
// console.log(user);

//-------------------------------------------------------->

//2)

// const func = function (a) {
//   delete a; // a is a local variable , delete only works in case of objects
//   return a;
// };
// console.log(func(5));

//--------------------------------------------------------->

//3)

// //if we want to add property with space in object

// const user = {
//   name: "Saurabh",
//   age: 25,
//   "lives in": "Bangalore",
// };
// //accesing key with space
// console.log(user["lives in"]);

// //deleting property with space
// delete user["lives in"];
// console.log(user);

//--------------------------------------------------------->

//4)

// //Dynamically add key and value
// const property = "firstName";
// const name = "Saurabh";

// const user = {
//     [property]:name
// }
// console.log(user);

// //accessing property
// console.log(user.firstName);

//--------------------------------------------------------->

//5)

//   //print key and value in object

//   const user = {
//     name: "Saurabh",
//     city: "Bangalore",
//     "is Engineer": true,
//   };

//   //printing keys
//   for (const key in user) {
//     console.log(key);
//   }

//   //printing values
//   for (let key in user) {
//     console.log(user[key]);

//--------------------------------------------------------->

//6)

// //if we have two keys in the same name in an object
// const obj = {
//     a:"one",
//     b:"two",
//     a:"three"
// }
// console.log(obj);

//--------------------------------------------------------->

//7)

//create a fn multiplyByTwo(obj) that multiplies all numeric propery by 2
//     let obj = {
//         a:100,
//         b:200,
//         title:"My nums"
//     }
//     const multiplyByTwo = (nums) => {
//         for(key in nums){
//             if(typeof nums[key]==="number"){
//                 // nums[key] = nums[key]*2
//                 nums[key]*=2
//             }
//         }
//     }

//   multiplyByTwo(obj);
//   console.log(obj);

//--------------------------------------------------------->

//8)

// const a = {};
// const b = {key:"b"};
// const c = {key:"c"};

// a[b] =123;
// a[c] =456;
// console.log(a)
// console.log(a[b]);

// //explanation
// a["[object object]"] = 123
// a["[object object]"] =456 //overlaps

//--------------------------------------------------------->

//9)

// What is JSON.stringify and JSON.parse

//   //converting object to string
// const user = {
//   name: "Saurabh",
//   age: 25,
// };

// const strObj = JSON.stringify(user);
// console.log(strObj);

// localStorage.setItem("test", strObj);

// console.log(localStorage.getItem("test"));

//   //converting back to object;

//   const backObj = JSON.parse(strObj);
//   console.log(backObj);

//--------------------------------------------------------->

//10)
// //spread operator
// console.log([..."Saurabh"]);

// const user = {name:"Saurabh" , age:26};
// const admin = {admin:true , ...user};
// console.log(admin)

//--------------------------------------------------------->

//11)
// //if we want to stringify some properties of an object not all or ignore others completely
// const settings = {
//     userName:"Saurabh",
//     level:19,
//     health:90
// }
// const data = JSON.stringify(settings,["userName","level"]);
// console.log(data);

//--------------------------------------------------------->

//12)

//   //Destructuring

//   const user = {
//     name: "Saurabh",
//     age: 26,
//     fullName: {
//       middle: "kumar",
//       last: "singh",
//     },
//   };

//   const { name: myName } = user;
//   console.log(myName);
//   const {
//     fullName: { last: lastName },
//   } = user;
//   console.log(lastName);

//--------------------------------------------------------->

//13)

//   //Rest and spread operators

//   function getItem(fruitList, favouriteFruit, ...args) {
//     return [...fruitList, ...args, favouriteFruit];
//   }
//   console.log(getItem(["banana", "apple"], "pear", "orange"));

//--------------------------------------------------------->

//14)

//     //object referencing
//  let c = {greeting: "Hey!"};
//  let d;

//  d = c;

//  c.greeting = "Hello";
//  console.log(d.greeting);
//  //when we try to assign one object to other we are not trying to copy the properties
//  //of that object to that variable but we give providing reference to that object to that variable

//  console.log({a:1} == {a:1});
//  console.log({a:1} ==={a:1});

//--------------------------------------------------------->

//15)

// let person = { name: "Lydia" };
// const members = person;
// person = null;

// console.log(members);

//--------------------------------------------------------->

//16)

//   const value = { number: 10 };

//   const multiply = (x = { ...value }) => {
//     console.log((x.number *= 2));
//   };

//   multiply();
//   multiply();
//   multiply(value);
//   multiply(value);

//--------------------------------------------------------->

//17)

// function changeAgeAndReference(person) {
//   person.age = 25;
//   person = {
//     name: "John",
//     age: 50,
//   };

//   return person;
// }

// const personObj1 = {
//   name: "Alex",
//   age: 30,
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?

//--------------------------------------------------------->

//18)

//call by value and call by reference , shallow copy vs deep copy

// let a = 20 ;
// let b=30 ;
// b=a;
// console.log(b);
// console.log(a)

//In case of reference value of object is stored in unique address not like primitive as actual value
//stored directly and object variable will have knowledge of address
//  let user = {
//   name:"sam"
//  }
// let employee = {
//   name:"alex"
// }
// user = employee
// console.log(user) //you will feel it's behaving same but things are different as user is holding different address than employee. Now both holding employee's address not value, the value of right side will come to value of left side.

// employee.name = "saurabh";
// console.log(user);// here is th whole scenario .In refereces you don't have to think about values but to think about addresses.

// user.name = "Vikas"
// console.log(employee);

// //copy vs clone
// //copy is what we saw above

//--------------------------------------------------------->

//19)

//copy vs clone
// const user = {
//   name:"Saurabh"
// }

// const employee = {
//   name:"Saurabh"
// }
// console.log(user===employee);

// const clonedEmployee = {...employee}
// console.log(clonedEmployee);
// console.log(employee === clonedEmployee);
// employee.name = "Vikas"
// console.log(clonedEmployee);

//--------------------------------------------------------->

//20)

//spread operator works great if there is no nested object as it does shallow copy

// const user = {
//   name: "Saurabh",
//   address: {
//     city: "Bangalore",
//     age: 25,
//   },
// };

// const clonedUser = { ...user };

// user.address.city = "Patna";

// console.log(clonedUser); //it will change because of shallow copy

// //To fix it we will be doing deep copy by another api which javascript provides

//--------------------------------------------------------->

//21)

//deep clone

//    const user = {
//     name: "Saurabh",
//     address: {
//       city: "Bangalore",
//       age: 25,
//     },
//   };

// const deepCloned = structuredClone(user);
// console.log(deepCloned);

// user.address.city = "Patna";

// console.log(deepCloned);

//--------------------------------------------------------->
