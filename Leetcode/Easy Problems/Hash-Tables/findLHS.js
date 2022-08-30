/*
594. Longest Harmonious Subsequence

https://leetcode.com/problems/longest-harmonious-subsequence/


We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.


STEPS:
Initialize new Map()
Set result at zero 
For of loop through nums map[v] = map[v] + 1 || 1 (build map)
Loop through the key of map and parse int key + 1
Set result to math max result, map[key] + map[parseInt(key) + 1]
Return result
*/



const findLHS = (nums) => {
    
    let map = new Map() 
    let result = 0
    
    for(let v of nums) {
        map[v] = map[v] + 1 || 1
    }
    
    for (let key in map) {
        if(map[parseInt(key) + 1]) {
            result = Math.max(result, map[key] + map[parseInt(key) + 1])
        }
    }
    
    return result
};