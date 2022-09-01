/*
125. Valid Palindrome
https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


*/


const isPalindrome = function (s) {

    let replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let l = 0;
    let r = replaced.length - 1;

    while (l < r) {
        if (replaced[l] !== replaced[r]) {
            return false;
        }
        l++;
        r++;
    }

    return true;
}