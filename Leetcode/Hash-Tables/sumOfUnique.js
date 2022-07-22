/*
1748. Sum of Unique Elements
https://leetcode.com/problems/sum-of-unique-elements/
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

 
STEPS:

Create empty Map()
Initialize sum at zero 
Loop through nums if map[n] is undefined increase sum by n and set map[n] to true
Else if decrement n from sum and set map[n] to false 
Return sum 




*/


//with MAP 
const sumOfUnique = (nums) => {

    let map = new Map()
    let sum = 0
    
    for(let n of nums){
        if(map[n] === undefined){
            sum += n
            map[n] = true
        } else if(map[n]){
            sum -= n
            map[n] = false
        }
    }
    
    return sum
}


//with forEach
var sumOfUnique2 = function(nums) {
    let result = []
    nums.forEach(function(e){
        if(nums.indexOf(e)  == nums.lastIndexOf(e)){
            result.push(e)
        } 
    })
    return result.reduce((a,b) => a + b , 0)
}




//
var sumOfUnique3 = function(nums) {
    let map = {};
    for(let num of nums) {
        map[num] ? map[num]++ : map[num] = 1 
    }
    
    console.log(map);
    
    let sum = 0;
    for(let num in map) {
        (map[num] === 1) && (sum += Number(num))
    }
    
    return sum
};

