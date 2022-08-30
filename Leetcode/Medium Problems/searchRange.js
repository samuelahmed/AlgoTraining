/* 
34. Find First and Last Position of Element in Sorted Array
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.


*/ 

const searchRange = function (nums, target) {

    let low = 0;
    let high = nums.length - 1;
    let mid = 0;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (nums[mid] >= target) high = mid - 1;
        else low = mid + 1;
    }

    if (nums[low] !== target) return [-1, -1];

    let start = low;
    low = 0;
    high = nums.length - 1;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] <= target) low = mid + 1;
        else high = mid - 1;
    }

    return [start, high];
}