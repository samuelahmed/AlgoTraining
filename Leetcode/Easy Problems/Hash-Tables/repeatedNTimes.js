/*
961. N-Repeated Element in Size 2N Array
https://leetcode.com/problems/n-repeated-element-in-size-2n-array/


You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.


STEPS: 
Initialize empty Map()
Loop through values of nums
If value is in map return value
Else return zero 


*/


 //WITH MAP 
 const repeatedNTimes = (nums) => {
    
    let map = new Map()

    for ( let num of nums) {
        if (num in map) {
            return num;
        } else {
            map[num] = 0;
        }
    }
};



//with ES6
var repeatedNTimes2 = function(nums) {
    return nums.find((a, index, array) => array.indexOf(a) !== index)
};



//WITH SET
var repeatedNTimes3 = function(A) {
    let set = new Set();
    
    for(let a of A) {
        if(set.has(a))
            return a;
        
        set.add(a);
    }
};
