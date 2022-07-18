/*/
1365. How Many Numbers Are Smaller Than the Current Number
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/


Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.  

NOTES: 

1. Initialize empty results array
2. Initialie sorted array
3. Slice() sorted array to duplicated
4. Sort() sorted array using (a,b) => a-b so it works for numbers 
5. for loop through nums
6. Compare the value of sorted array with nums array and push into results the indexOf at which sorted is in nums[i]
7. Return results 



/*/
// var smallerNumbersThanCurrent = function (nums) {
    
//     let sorted = nums.slice().sort((a,b) => a-b);

//     let result = [];

//     for (let i = 0; i < nums.length; i++) {
//         result.push(sorted.indexOf(nums[i]))
//     }

//     return result
// }

const smallerNumbersThanCurrent = (nums) => {

    let answer = []
    let sorted = nums.slice().sort((a,b)=>a-b)

    for(let i = 0; i<nums.length; i++){
        answer.push(sorted.indexOf(nums[i]))
    }

    return answer
}