// Ques 1 : Reverse a string

// let str = "abcde";
// const reverse = str.split("").reverse().join("");
// console.log(reverse);

//------------------------------------------------------------------------------->

//// Ques 2 : Check palindrome

// let str = "mad";
// const isPalindrome = (str) => {
//   return str === str.split("").reverse().join("");
// };
// const res = isPalindrome(str);
// console.log(res);

//------------------------------------------------------------------------------->

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

//------------------------------------------------------------------------------->

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

//------------------------------------------------------------------------------->

//5) Count number of vowels from the string considering upeercase and lowerCase;

// let str = "hello";

// const countVowels = (str) => {
//   const vovels = "aeiouAEIOU";
//   let count = 0;

//   for (let char of str) {
//     if (vovels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countVowels(str));

//------------------------------------------------------------------------------->

//6. Remove Duplicate Characters
// Input: "programming"
// Output: "progamin"

//1st approach - using creating objects and pushing uniques to array

// const str = "programming";

// const removeDuplicates = (str) => {
//   let uniq = [];

//   let obj = {};

//   for (let char of str) {
//     if (!obj[char]) {
//       obj[char] = true;
//       uniq.push(char);
//     }
//   }
//   return uniq.join("");
// };
// console.log(removeDuplicates(str));

//2nd approach - By set

// const str = "programming";

// const res = Array.from(new Set(str)).join("");
// const res = [...new Set(str)].join("");
// console.log(res);

//------------------------------------------------------------------------->

// 7. Count Character Frequency

// const str = "hello";

// const countFreq = (str) => {
//   let obj = {};

//   for (let char of str) {
//     obj[char] = (obj[char] || 0) + 1;
//   }
//   return obj;
// };

// console.log(countFreq(str));

//------------------------------------------------------------------------>

// 9. Longest Word in Sentence

// Input: "I love javascript programming"
// Output: "programming"

// let str = "I love javascript programming";

// const findLongest = (str) => {
//   const strArr = str.split(" ");
//   let longest = "";

//   for (let char of strArr) {
//     if (char.length > longest.length) {
//       longest = char;
//     }
//   }
//   return longest;
// };

// console.log(findLongest(str));

//---------------------------------------------------------------------->

// 10 Reverse Words in Sentence

// Input: "I love JavaScript"

// Output: "JavaScript love I"

// let sentence = "I love javascript";

// const reverse = (sentence) => {
//   let arr = sentence.split(" ").reverse().join(" ");
//   return arr;
// };
// console.log(reverse(sentence));

//---------------------------------------------------------------------->

//11 First Non-Repeated Character/ unique character

// Input: "aabbcddee"
// Output: "c"

// let input = "aabbcddee";
// const findUniqChar = (input) => {
//   let obj = {};
//   let arr = [];

//   for (let char of input) {
//     obj[char] = (obj[char] || 0) + 1;
//   }

//   for (let key in obj) {
//     if (obj[key] === 1) {
//       return key;
//     }
//   }
//   return null;
// };

// console.log(findUniqChar(input));

//------------------------------------------------------------------->
