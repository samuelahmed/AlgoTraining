/*
290. Word Pattern


https://leetcode.com/problems/word-pattern/


Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

STEPS:
Set words to s.split(' ')
Set map to new Map()
If words.length is not euqal to pattern return false (catches diff length)
If words.size is not equal to set(patter).size return false (catches equal word)
For loop through pattern length 
If map pattern has pattern [i] and it is not equal to words[i] return false
Map.set pattern[i]  and words[i]
Return true

*/



const wordPattern = (pattern, s) => {
    
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