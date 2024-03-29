/*
https://leetcode.com/problems/build-array-from-permutation/
1920. Build Array from Permutation
Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

 
NOTES: 
initialize answer array 
loop through nums with i 
push nums[nums[i]] to answer
return answer

With MAP:
    return nums.map(answer => nums[answer])



*/


const buildArray = (nums) => {

    let result = [];

    for (let i = 0; i<nums.length; i++) { 
        result.push(nums[nums[i]]);
    }

    return result; 
};




const buildArray2 = (nums) => {

    return nums.map(answer => nums[answer]);

}