/*
1941. Check if All Characters Have Equal Number of Occurrences
https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/


Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

STEPS:

Initialize empty Map
Loop through letters of s
Map[letter] is equal to itself or zero + 1 (setup count of each letter)
Initialize occurences equal to the set of Object.values(map)
If occurences.size === 1 (all letter groups are equal) return true
Else return false


*/



// WITH MAP
const areOccurrencesEqual = (s) => {
    
    let map = new Map()
    
    for(let letter of s){
        map[letter] = (map[letter] || 0) + 1
    }
    
    let count = new Set(Object.values(map))
    if(count.size === 1) return true
    return false 
}





//with REDUCE
const areOccurrencesEqualReduce = (s) => {
    
    let count = s.split('').reduce((obj, cur)=>{
      obj.hasOwnProperty(cur) ? obj[cur] += 1 : obj[cur] = 1
      return obj
    },{})

    return new Set(Object.values(count)).size === 1
  };