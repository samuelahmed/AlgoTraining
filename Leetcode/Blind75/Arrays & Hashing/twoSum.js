/*
1. Two Sum
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/


function twoSum (nums, target) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];

        if (compliment in map) {
            return [map[compliment], i]
        }
        map[nums[i]] = i
    }
}