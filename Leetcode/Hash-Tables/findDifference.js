/*
2215. Find the Difference of Two Arrays

https://leetcode.com/problems/find-the-difference-of-two-arrays/submissions/


Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

STEPS: 
Set set1 to a new Set of nums1
Set set2 to a new Set of nums2
ForEach loop through nums2 where it will delete any values that are also in set1
ForEach loop through nums1 where it will delete any values that are also in set2
Return and array of split arrays set21 and set2

*/




const findDifference = (nums1, nums2) => {
    
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    nums2.forEach(i => {set1.delete(i)})
    nums1.forEach(i => {set2.delete(i)})

    return ([[...set1], [...set2]])
};