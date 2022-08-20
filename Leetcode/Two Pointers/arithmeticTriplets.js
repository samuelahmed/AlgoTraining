/*
2367. Number of Arithmetic Triplets
https://leetcode.com/problems/number-of-arithmetic-triplets/



You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

i < j < k,
nums[j] - nums[i] == diff, and
nums[k] - nums[j] == diff.
Return the number of unique arithmetic triplets.

STEPS: 

*/


const arithmeticTriplets = (nums, diff) => {
    
    let object = {};
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= diff * 2){
            if (object[nums[i]-diff] && object[nums[i] - diff * 2]) {
                result++
            }
        }   
        object[nums[i]] = true;
    }
    
    return result;
};