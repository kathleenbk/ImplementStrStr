// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

var strStr = function (haystack, needle) {
    if (needle === '' || needle === haystack) return 0;
    if (haystack.length < needle.length) return -1;

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack[i] === needle[0]) {
            for (let k = 0; k < needle.length; k++) {
                if (needle[k] !== haystack[i + k]) {
                    break;
                } else if (k === needle.length - 1) {
                    return i;
                }
            }
        }
    } return -1;
}

console.log(strStr("hello", "ll"));