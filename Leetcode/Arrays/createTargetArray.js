/*/
https://leetcode.com/problems/create-target-array-in-the-given-order/
1389. Create Target Array in the Given Order

Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

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