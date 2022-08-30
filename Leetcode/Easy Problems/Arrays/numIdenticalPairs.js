/*/
1512. Number of Good Pairs
https://leetcode.com/problems/number-of-good-pairs/

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

NOTES: 
array of ints
return good pairs -> i,j are == and i<j
essentially are the numbers equal by their indexes

STEPS:
initialize answer counter
loop through the array i 
loop again through the values j let j=i+1
setup consition if nums i===j increase counter, 
return counter
/*/




var numIdenticalPairs = function (nums) {

    let count = 0;

    for (let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] === nums[j]){
                count++
            }
        }
    }

    return count; 
}