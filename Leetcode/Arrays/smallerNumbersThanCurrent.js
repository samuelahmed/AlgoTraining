/*/
1365. How Many Numbers Are Smaller Than the Current Number
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/


Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

NOTES: 
/*/





var smallerNumbersThanCurrent = function (nums) {
    
    let sorted = nums.slice().sort((a,b) => a-b);

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        result.push(sorted.indexOf(nums[i]))
    }

    return result
}