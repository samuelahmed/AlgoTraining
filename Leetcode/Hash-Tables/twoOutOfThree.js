
/*
2032. Two Out of Three
https://leetcode.com/problems/two-out-of-three/

Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 
Initialize arr with three split... Set() for nums1,2,3
Initialize map object
Initialize empty results array
For of loop through arr and build map to have count of each value
For in loop through map and push any values >= 2 into the results array
Return results


*/



//O(n) time /space answer 
const twoOutOfThree = (nums1, nums2, nums3) => {
    
    let arr = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)]
    let map = {}
    let result = []
    
    for(let n of arr) {
        if(map[n]) {
            map[n] += 1
        } else {
            map[n] = 1
        }
    }
    console.log(map)
    
    for(let i in map) {
        if(map[i] >= 2) {
            result.push(i)
        }
    }
    
  return result  
};

//slow answer by me
var twoOutOfThree2 = function(nums1, nums2, nums3) {
    
    let answer = []
    
    for(let n of nums1){
        for(let n2 of nums2){
            if(n === n2){
                answer.push(n)
            }
            for(let n3 of nums3){
                if (n2 === n3){
                    answer.push(n2)
                }
                if (n === n3){
                    answer.push(n3)
                }
            }
        }
    }
    
    let finalAnswer = [...new Set(answer)];
    return finalAnswer
};