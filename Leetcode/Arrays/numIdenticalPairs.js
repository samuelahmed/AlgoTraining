/*/
1512. Number of Good Pairs
https://leetcode.com/problems/number-of-good-pairs/

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

NOTES:     
//create an otpout counting good pairs: answer
// loop through array nums with for loop normally
//loop through array j=[i+1] of nums
//compares nums i and j
//increase count for each === pair 

/*/




var numIdenticalPairs = function (nums) {

    let count = 0;

    for (let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] === nums[j]){
                count++
            }
        }
    }
    return count; 
}