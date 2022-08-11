/*
344. Reverse String
https://leetcode.com/problems/reverse-string/

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

STEPS:


*/


const reverseString = (s) => {
    
    let temp = s[0];
    
    if (s.length === 0) {
        return; 
    }
    
    s.shift();
    reverseString(s);
    s.push(temp);
};
