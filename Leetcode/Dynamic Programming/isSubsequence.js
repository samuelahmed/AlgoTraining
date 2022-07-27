
/*
392. Is Subsequence
https://leetcode.com/problems/is-subsequence/

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

STEPS
Initialize results to zero
If s.length is greater than t.length return false
Loop through t.length and if s[result] === t[i] increment result
Return check if result is equal to s.length



*/



const isSubsequence = (s, t) => {
    
    let result = 0

    if (s.length > t.length){
        return false   
    } 

    for (let i = 0; i < t.length; i++) {
        if (s[result] === t[i]) {
            result++;
        }
    }

    return result === s.length
};