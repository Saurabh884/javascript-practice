//1)

// console.log(b);
// let a = 10;
// var b = 100;

//------

//2)

// console.log(a);
// let a = 10;
// var b = 100;

//-------------

// 3)

// var a = 10;
// var a = 100;
// console.log(a);

//---------->

//4)

// let a = 10;
// let a = 100;
// console.log(a);

//----------------->

//5)

// let a = 10;
// var a = 100;
// console.log(a);

//6)

// const b;
// b = 1000;
// console.log(b);

//7)

// let a = 10;
// a = 100;
// console.log(a);

//----------------------->

//   Questions on scope

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

//Shadowing in javascript

//1)

// var a = 100;

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
// }
// console.log(a);

//-------->

//2)

// let b = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(b);

//---------------------->

//3)

// const b = 100;
// {
//   var a = 10;
//   const b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(b);

//-------->

//4)

// const c = 100;
// function x() {
//   const c = 30;
//   console.log(c);
// }
// x();
// console.log(c);

//--------------->

//5) Illegal Shadowing

// var a = 20;
// {
//   var a = 30;
// }
// console.log(a);

//--------------->

//6)

// let a = 20;
// {
//   var a = 20;
// }
// console.log(a);

//---------------->

//7)

// let a = 20;
// {
//   let a = 30;
//   console.log(a);
// }
// console.log(a);

//-------------->

//8)

// var a = 20;
// {
//   let a = 30;
//   console.log(a);
// }
// console.log(a);

//----------------->

//9)

// let a = 30;

// function x() {
//   var a = 20;
//   console.log(a);
// }
// x();

//Few important hoisting questions

//1)

// console.log(typeof foo);

// function foo() {
//   return "bar";
// }
// var foo = "bar";

//--------------------------->

//2)

// function foo() {
//   return "bar";
// }
// var foo;

// console.log(typeof foo);

//---------->

//3)

// if (true) {
//   function foo() {
//     console.log(1);
//   }
// } else {
//   function foo() {
//     console.log(2);
//   }
// }

// foo();

//----->

//4)

// function foo() {
//   bar();

//   return;

//   function bar() {
//     console.log("bar");
//   }
// }

// foo();

//------------->

//5)

// function foo(x) {
//   x();

//   function x() {
//     console.log("foo");
//   }
// }

// foo(function () {
//   console.log("bar");
// });

//----------->

//6)

//   foo();

// function foo() {
//   console.log(1);
// }

// var foo = function () {
//   console.log(2);
// };

// function foo() {
//   console.log(3);
// }

// foo();

//------------>

//7)

// function animal() {
//   console.log("Cat");
// }

// var otherAnimal;

// animal();
// otherAnimal();

// otherAnimal = function () {
//   console.log("Dog");
// };

//-------->

//8)

// b = function a() {};
// var a = (b = 6);
// a = function b() {};
// function b() {}
// function a() {}
// console.log(a, b);

//---------->

//9)

// function foo() {
//   let a = (b = 0);
//   a++;
//   return a;
// }

// foo();
// console.log(typeof a);
// console.log(typeof b);

//---------->

//10)

// var a = 10;
// console.log("line number 2", a);

// function fn() {
//   console.log("line number 4", a);
//   var a = 20;
//   a++;
//   console.log("line number 7", a);
//   if (a) {
//     var a = 30;
//     a++;
//     console.log("line number 11", a);
//   }
//   console.log("line number 13", a);
// }

// fn();
// console.log("line number 2", a);

//-------->

//11)

// function a() {
//   console.log(b);
// }

// var b = 10;
// a();

//-------->
