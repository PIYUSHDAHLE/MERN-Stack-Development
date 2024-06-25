// Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function str(haystack,needle) {
    return haystack.indexOf(needle);
}

let haystack1 = "sadbutsad", needle1 = "sad";
let haystack2 = "leetcode", needle2 = "leeto";
let haystack3 = "piyushdahle", needle3 = "yush";

console.log(str(haystack1,needle1));
console.log(str(haystack2,needle2));
console.log(str(haystack3,needle3));

//str1.indexOf(str2) here we have to check the str2 is available or not in str1 so we use this indexOf() method
// if available then return 0 else return -1