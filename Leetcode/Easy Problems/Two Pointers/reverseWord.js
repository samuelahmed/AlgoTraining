/*
557. Reverse Words in a String III
https://leetcode.com/problems/reverse-words-in-a-string-iii/

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

STEPS:


*/



const reverseWords = (s) => {
    
    let result = '';
    let word = '';
    
    for (let c of s) {
        if (c === ' ') {
            result += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    
    return result + word;
};



const reverseWordsSplit = (s) => {
    
    return s.split(' ').map(w => w
        .split('')
        .reverse()
        .join(''))
        .join(' ');
};
