/*
643. Maximum Average Subarray I

https://leetcode.com/problems/maximum-average-subarray-i/


You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.


STEPS:
Initailize sum as zero 
Loop through nums until k adding value to sum
Set max to sum
Loop through nums again updating sum to be sum-nums[i-k]+nums[i]
Set max to biggest value of max and sum
Return max divided by k 
*/


const findMaxAverage = (nums, k) => {

    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    let max = sum;

    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum);
    }
    
    return max / k;
};