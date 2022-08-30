/*
2006. Count Number of Pairs With Absolute Difference K
https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.


STEPS: 
Create empty object
Initialize answer at zero
Loop through nums giving values to the object
Seperate loop through nums if obj[nums[i]-k] += that value to answer
Return Asnwer
*/


const countKDifference = (nums, k) => {
    
    let obj = {}
    let answer = 0

    for(let i of nums){
        obj[i] ? obj[i]++ : obj[i] = 1
    }
    
    for (let i=0; i<nums.length; i++) {
        if(obj[nums[i] -k]){
            answer += obj[nums[i] - k]
        }
    }
    
    return answer 
}