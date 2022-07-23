/*
290. Word Pattern


https://leetcode.com/problems/word-pattern/


Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

STEPS:



*/



var wordPattern = function(pattern, s) {
    
    let words = s.split(' ')
    let map = new Map()
    
    if(words.length !== pattern.length){
        return false
    }
    if(new Set(words).size !== new Set(pattern).size){
        return false
    } 
    
    for(let i = 0; i < pattern.length; i++) {
        if(map.has(pattern[i]) && 
           map.get(pattern[i]) !== words[i]) {
            return false
        } 
        map.set(pattern[i], words[i])
    }
    
    return true
};