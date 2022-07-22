/*
205. Isomorphic Strings
https://leetcode.com/problems/isomorphic-strings/


Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


STEPS:
Initialize new Map()
Loop through s.length 
If there is no map['s' +s[i]] then add it and set to t[i]
If there is no map['t' +t[i]] then add it and set to s[i]
If t[i] is not equal to the s map or if s[i] is not equal to the t map return false 
Return true

*/


const isIsomorphic = (s, t) => {
    
    let map = new Map()

    for (let i = 0; i<s.length; i++){
        if(!map['s' + s[i]]) map['s' + s[i]] = t[i]
        if(!map['t' + t[i]]) map['t' + t[i]] = s[i]
        if(t[i] != map['s' + s[i]] || s[i] != map['t' + t[i]]){  
            return false
        } 
    }
    
    return true;
};