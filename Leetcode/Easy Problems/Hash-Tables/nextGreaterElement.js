/*
496. Next Greater Element I
https://leetcode.com/problems/next-greater-element-i/


The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

STEPS: 
Create new Map 
Initialize empty array called stack
Loop through nums2 with forEach and nest a while loop
While stack.length > 0 && it is within stack push stack n 
Return nums1.map(n => map[n] || -1)


*/


const nextGreaterElement = (nums1, nums2) => {
    
    let map = {}
    let stack = []
      
    nums2.forEach(n => {
      while (stack.length > 0 && stack[stack.length - 1] < n) {
        map[stack.pop()] = n
      }
      stack.push(n)
    })
      
    return nums1.map(n => map[n] || -1)
  };