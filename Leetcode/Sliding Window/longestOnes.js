/*
1004. Max Consecutive Ones III
https://leetcode.com/problems/max-consecutive-ones-iii/

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.


STEPS:
Initialize result, count, and start at 0
For loop and if nums[i] === 0 increment count
If count is less than k start++ and if nums[start] === 0 decrement count 
Set result to math.max result, i - start + 1 and return



*/



const longestOnes = (nums, k) => {
    
    let result = 0;
    let count = 0;
    let start = 0;
    
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] === 0) count++;
        if (count > k) {
            if (nums[start] === 0) {
                count--;
            }
            start++;
        }
        result = Math.max(result, i - start + 1);
    }

    return result; 
};