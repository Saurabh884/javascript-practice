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

//12) Find Maximum Occurring Character in string
//Input: "javascript"

//Output: "a"

//1st approach

// const str = "javascript";

// const findMaxOccurChar = (str) => {
//   let obj = {};
//   let maxChar = "";
//   let maxCount = 0;

//   for (let char of str) {
//     obj[char] = (obj[char] || 0) + 1;
//   }

//   console.log(obj);

//   for (key in obj) {
//     if (obj[key] > maxCount) {
//       maxCount = obj[key];
//       maxChar = key;
//     }
//   }
//   return maxChar;
// };

// console.log(findMaxOccurChar(str));

//2nd approach

// const input = "javascript";

// const result = input.split("").reduce(
//   (acc, elem) => {
//     acc[elem] = (acc[elem] || 0) + 1;

//     if (acc[elem] > acc.maxCount) {
//       acc.maxCount = acc[elem];
//       acc.maxChar = elem;
//     }

//     return acc;
//   },
//   {
//     maxChar: "",
//     maxCount: 0,
//   },
// );

// console.log(result.maxChar);

//------------------------------------------------------------------->

//13) Capitalize First Letter of Each Word

// Input: "hello world"
// Output: "Hello World"

//1st approach

// let input = "hello world";

// const capitalize = (str) => {
//   const words = str.split(" ");
//   let res = [];

//   for (let word of words) {
//     res.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return res.join(" ");
// };
// console.log(capitalize(input));

//2nd approach

// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalizeWords("hello world"));

//--------------------------------------------------------------------------->

//14 Check if String Contains Substring

// Input: "javascript", "script"
// Output: true

// let str = "javascript";
// let sub = "script";

// const hasSubstring = (str, sub) => {
//   return str.includes(sub);
// };
// console.log(hasSubstring(str, sub));

//----------------------------------------------------------------------------->

//15) String Compression

// Input: "aaabbcc"
// Output: "a3b2c2"

// let input = "aaabbcc";

// const compress = (str) => {
//   let compressed = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       compressed += str[i] + count;
//       count = 1;
//     }
//   }
//   return compressed;
// };
// console.log(compress(input));

//---------------------------------------------------------------------------------------->

//16) Check Rotation of String

// Rotation means:

// Take some characters from the beginning of a string,Move them to the end Without changing their order

// Example with "abcd":

// abcd
// bcda
// cdab
// dabc

// Input:
// str1 = "abcd"
// str2 = "cdab"

// Output: true

// function isRotation(str1, str2) {
//   return str1.length === str2.length && (str1 + str1).includes(str2);
// }

// console.log(isRotation("abcd", "cdab"));

//-------------------------------------------------------------------------------->

//17)Find All Substrings
// Input: "abc";

// Output: a;
// ab;
// abc;
// b;
// bc;
// c;

// function getSubstrings(str) {
//   const result = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       result.push(str.slice(i, j));
//     }
//   }

//   return result;
// }

// console.log(getSubstrings("abc"));

//-------------------------------------------------------------------------->

//18 Longest Substring Without Repeating Characters
// Input: "abcabcbb";
// Output: 3;

// function longestUniqueSubstring(str) {
//   let set = new Set();
//   let left = 0;
//   let max = 0;

//   for (let right = 0; right < str.length; right++) {
//     while (set.has(str[right])) {
//       set.delete(str[left]);
//       left++;
//     }

//     set.add(str[right]);

//     max = Math.max(max, right - left + 1);
//   }

//   return max;
// }

// console.log(longestUniqueSubstring("abcabcbb"));

//-------------------------------------------------------------------------->

//19) Check Valid Parentheses

// Input: "()[]{}";
// Output: true;

function isValid(str) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (top !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}"));

//-------------------------------------------------------------------------->
