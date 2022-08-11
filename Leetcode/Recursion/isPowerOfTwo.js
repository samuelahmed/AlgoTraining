/*
231. Power of Two
https://leetcode.com/problems/power-of-two/
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

STEPS:

*/




const isPowerOfTwo = (n) => {    
    
    if (n === 1) return true;
    if (n <= 0) return false;
    if (n % 2 !== 0) return false;
    
    return isPowerOfTwo(Math.floor(n/2));    
};