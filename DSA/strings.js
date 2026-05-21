//// Ques 1 : Reverse a string

// let str = "abcde";
// const reverse = str.split("").reverse().join("");
// console.log(reverse);

//end----

//// Ques 2 : Check palindrome

// let str = "mad";
// const isPalindrome = (str) => {
//   return str === str.split("").reverse().join("");
// };
// const res = isPalindrome(str);
// console.log(res);

//end-----

//// Ques 3 : Truncate the text
// Write a function called truncate that checks the length of a given string - str, and if
// it surpasses a specified maximum length, maxlength, it replaces the end of the string
// with the ellipsis character "..." so that the length matches the maximum length

// const str = "Subscribe to Saurabh Channel";
// let maxlength = 8;

// const truncateText = (str, maxlength) => {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength) + "...";
//   }
//   return str;
// };
// const output = truncateText(str, maxlength);
// console.log(output);

//// Ques 4  Valid Anagram

// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

//1st Approach

// let s = "anagram";
// let t = "nagaram";
// const isValidAnagram = (s, t) => {
//   str1 = s.split("").sort().join("");
//   str2 = t.split("").sort().join("");
//   return str1 === str2;
// };
// const output = isValidAnagram(s, t);
// console.log(output);

//2nd approach

// let s = "anagram";
// let t = "nagaram";

// const isAnagram = (s, t) => {
//   if (s.length !== t.length) return;
//   const obj1 = {};
//   const obj2 = {};

//   for (let i = 0; i < s.length; i++) {
//     obj1[s[i]] = (obj1[s[i]] || 0) + 1;
//     obj2[t[i]] = (obj2[t[i]] || 0) + 1;
//   }

//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) return false;
//   }
//   return true;
// };

// const res = isAnagram(s, t);
// console.log(res);
