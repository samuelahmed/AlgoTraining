/*
219. Contains Duplicate II
https://leetcode.com/problems/contains-duplicate-ii/


Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

STEPS:
Create new Map()
For loop from zero till nums.length 
If i - map.get(nums[i]) <= k return true
Else map.set(nums[i], i)
Return false

*/



const containsNearbyDuplicate = (nums, k) => {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (i - map.get(nums[i]) <= k) {
            return true;
        } else {
            map.set(nums[i], i);
        }
    }

    return false;
};