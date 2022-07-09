
/*/
1929. Concatenation of Array
https://leetcode.com/problems/concatenation-of-array/
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.


NOTES: 
//split array twice ...[],...[]  //take array and split into two 
                                    // return both arrays within one
// return split value

/*/


var getConcatenation = function (nums) {
    return [...nums, ...nums]
}

// console.log(getConcatenation(num1, num2))