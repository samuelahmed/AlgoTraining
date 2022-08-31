/*
https://leetcode.com/problems/contains-duplicate/

Build map 
Roll through array and add 1 to map each time value is seen
If map is > 2 at any point, there is a duplicate
*/


const containsDuplicate = (nums) => {
    
    let result = false; 
    let map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1
        
        if (map[nums[i]] > 1) {
            result = true;
        }
    }
    
    return result 
}