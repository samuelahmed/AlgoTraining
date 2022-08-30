/*

2154. Keep Multiplying Found Values by Two

https://leetcode.com/problems/keep-multiplying-found-values-by-two/submissions/

You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

You then do the following steps:

If original is found in nums, multiply it by two (i.e., set original = 2 * original).
Otherwise, stop the process.
Repeat this process with the new number as long as you keep finding the number.
Return the final value of original.


STEPS:
Loop through nums
If nums includes original value multiply original by two 
Return original




*/

//with whileloop 

const findFinalValue = (nums, original) => {

    while(nums.includes(original)){
        original = original * 2
    }

    return original
};


//with for loop (my own answer)
const findFinalValue1 = (nums, original) => {
        
    for(let i = 0; i<nums.length; i++){
        if(nums.includes(original)){
           original = original * 2
        }
    }
    
    return original
};


//with SET
var findFinalValueSet2 = function(nums, original) {

    const set = new Set(nums)
    let result = original
    
    while (set.has(result))
        result *= 2

    return result
};
 