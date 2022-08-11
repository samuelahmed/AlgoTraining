/*
1464. Maximum Product of Two Elements in an Array

https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 
STEPS

*/


const maxProduct = nums => {

    let m1 = 0;
    let m2 = 0;

    for (const val of nums) {
        m2 = Math.max(m2, Math.min(m1, val));
        m1 = Math.max(m1, val);
    }

    return (m1 - 1) * (m2 - 1);
};