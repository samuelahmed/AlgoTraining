/*
283. Move Zeroes
https://leetcode.com/problems/move-zeroes/


Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

STEPS:




*/


const moveZeroes = (nums) => {
    
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[result++] = nums[i];
        }
    }
    for (let i = result; i < nums.length; i++) {
        nums[i] = 0;
    }
    
    return result;
};