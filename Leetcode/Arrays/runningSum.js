/*/
1480. Running Sum of 1d Array

https://leetcode.com/problems/running-sum-of-1d-array/


Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.



NOTES: 
//create for loop from 1(i) -> end of array 
//add i and i-1 in a new array 
//return new array 

/*/




const runningSum = (nums) => {
    for (let i = 1; i < nums.length; i++){
        nums[i] += nums [i-1]
    }
    return nums
}