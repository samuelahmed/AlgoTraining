/*
16. 3Sum Closest
https://leetcode.com/problems/3sum-closest/


Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.


*/

function threeSumClosest (nums, target) {

        let result = Infinity;

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {

            let left = i + 1
            let right = nums.length - 1;

            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            while(left < right) {
                let total = nums[i] + nums[left] + nums[right];

                if (total === target) {
                    return target
                }

                result = Math.abs(target - result) < Math.abs(target - total) ? result : total;

                if (total < target) {
                    left++
                    while (left < right && nums[i] === nums[i - 1]) {
                        left++
                    }
                }
                else {
                    right--
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--
                    }
                }
            }

        }

        return result;
}