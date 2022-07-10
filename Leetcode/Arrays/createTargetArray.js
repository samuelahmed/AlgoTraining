/*/
https://leetcode.com/problems/create-target-array-in-the-given-order/
1389. Create Target Array in the Given Order

Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.


STEPS: 

1. initialize empty target array
2. loop through array the length 
3. loop though each index of the previous loop
4. if array[i] is less than or equal to inner loop, increment inner loop
5. loop in the nums array giving target the value: target[array[j]] = nums[i]
6. return target 
/*/

const createTargetArray = (nums, array) => {
    let target = [];
    for( let i=0; i<array.length; i++){
        for(let j=0; j<i; j++){
            if(array[i] <= array[j]){
                array[j]++
            }
        }
    }
    for(const i in nums){
        target[array[i]] = nums[i]
    }
    return target
}


//WITH SPLICE 

const createTargetArray = (nums, idx) => {
    let target = []
    for(const i in nums)target.splice(idx[i], 0, nums[i])
    return target
};