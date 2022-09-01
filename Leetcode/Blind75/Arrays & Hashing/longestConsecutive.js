/*
128. Longest Consecutive Sequence
https://leetcode.com/problems/longest-consecutive-sequence/


Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/



const longestConsecutive = function(nums) {

    if (nums === null || nums.length === 0) return 0;

    let set = new Set(nums);
    let result = 0;

    for (let num of set) {
        if (set.has(num - 1)) continue;

        let currNum = num;
        let currMax = 1;

        while (set.has(currNum + 1)) {
            currNum++;
            currMax++;
        }
        result = Math.max(result, currMax);
    }

    return result;
}