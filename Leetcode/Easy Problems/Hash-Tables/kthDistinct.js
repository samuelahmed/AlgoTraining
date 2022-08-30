/*
2053. Kth Distinct String in an Array
https://leetcode.com/problems/kth-distinct-string-in-an-array/



Initialize empty map 
Initialize answer array 
For each through the array to build the map
For loop through [key, va] of map Object 
Return the values === 1 and push their key to the answer
Return answer [k-1] since it starts at zero index || empty string if nothing

*/





const kthDistinct = (arr, k) => {
    
    let map = {} 
    let answer = [] 
    
    arr.forEach(i => map[i] = map[i] + 1 || 1)
    
    for (let [key, val] of Object.entries(map)) 
        if (val === 1) answer.push(key)
    
    return answer[k-1] || ""
};