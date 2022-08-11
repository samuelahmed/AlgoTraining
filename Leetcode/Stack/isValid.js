/*
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/


Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
STEPS:

*/


const isValid = (s) => {
       
    let stack = [];
    let bracketMap = {
        ")": '(',
        "]": '[',
        "}": '{',
    };
    
    if (s.length === 0) {
        return true;
    }
    
    for(let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            if (stack[stack.length - 1] === bracketMap[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
        } 
    }

    return stack.length === 0;
};