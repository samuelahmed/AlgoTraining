/*
2341. Maximum Number of Pairs in Array

https://leetcode.com/problems/maximum-number-of-pairs-in-array/

You are given a 0-indexed integer array nums. In one operation, you may do the following:

Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

 

STEPS:
Initialize new map and count
Loop through nums
If map[nums[i]] then go ahead and delete map[nums[i]] and increment count
else replace map[nums[i]] with one
return [count, Object.values(map).length]



*/


const numberOfPairs = (nums) => {
    
    let map = new Map()
    let count = 0
    
    
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]){
            delete(map[nums[i]])
            count++
        } else {
            map[nums[i]] = 1
        }
    }

    return [count, Object.values(map).length]
}