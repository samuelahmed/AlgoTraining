/*
961. N-Repeated Element in Size 2N Array
https://leetcode.com/problems/n-repeated-element-in-size-2n-array/


You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

*/


 //WITH MAP 
 var repeatedNTimes = function(A) {
    const map = {};
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] in map) {
            return A[i];
        } else {
            map[A[i]] = 0;
        }
    }
    
    return 0;
};



//with ES6
var repeatedNTimes = function(nums) {
    return nums.find((a, index, array) => array.indexOf(a) !== index)
  };



//WITH SET
var repeatedNTimes = function(A) {
    let set = new Set();
    
    for(let a of A) {
        if(set.has(a))
            return a;
        
        set.add(a);
    }
};
