/*
1763. Longest Nice Substring
https://leetcode.com/problems/longest-nice-substring/


A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.


STEPS:
Initialize arr as split s and create a new Set(arr)
Initialize char, sub1, and sub2 as empty strings
If s is shorter than 2 return empty string
Loop through arr.length starting from zero 
Set char to arr[i], if set has char upper and lowercase continue
Recursive call to set sub1 setting s.substring 0, i
Recrusive call to set sub2 setting s.substring i + 1
Return sub1.lenght >= sub2.length ? sub1 : sub2 (longer one)
Return s

*/



const longestNiceSubstring = (s) => {
    
    let arr = [...s];
    let set = new Set(arr);
    let char = '';
    let sub1 = '';
    let sub2 = '';
    
    if (s.length < 2) return "";
    
    for (let i = 0; i < arr.length; i++) {
        char = arr[i];
        if (set.has(char.toUpperCase()) && set.has(char.toLowerCase())) continue;
        sub1 = longestNiceSubstring(s.substring(0, i));
        sub2 = longestNiceSubstring(s.substring(i + 1));
        return sub1.length >= sub2.length ? sub1 : sub2;
    }
    
    return s; 
};