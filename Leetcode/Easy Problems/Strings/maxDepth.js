/*
1614. Maximum Nesting Depth of the Parentheses
https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

A string is a valid parentheses string (denoted VPS) if it meets one of the following:

It is an empty string "", or a single character not equal to "(" or ")",
It can be written as AB (A concatenated with B), where A and B are VPS's, or
It can be written as (A), where A is a VPS.
We can similarly define the nesting depth depth(S) of any VPS S as follows:

depth("") = 0
depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

Given a VPS represented as string s, return the nesting depth of s.

NOTES:


Initialize answer int at zero
Initialize counter int at zero
For loop through s
If s[i] is equal to ( answer.math.max(answer, ++counter)
Else decrement counter
Return answer



*/



//
// const maxDepth = (s) => {

//     let l = 0, r = 0
//     return s.split('').reduce((depth, c) => {
//         if (c === '(') l++
//         if (c === ')') r++
//         return Math.max(l - r, depth)
//     }, 0)
// }


const maxDepth = (s) => {

    let maxCount = 0
    let count = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            maxCount = Math.max(maxCount, ++count);            
        } else if (s[i] === ')') {
            count--;
        }
    }

    return maxCount;
};