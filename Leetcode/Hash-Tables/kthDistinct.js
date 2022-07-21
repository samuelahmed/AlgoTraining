/*




Initialize empty map 
Initialize answer array 
For each through the array to build the map
For loop through [key, va] of map Object 
Return the values === 1 and push their key to the answer
Return answer [k-1] since it starts at zero index || empty string if nothing

*/





const kthDistinct = (arr, k) => {
    
    const map = {} 
    const answer = [] 
    
    arr.forEach(i => map[i] = map[i] + 1 || 1)
    
    for (let [key, val] of Object.entries(map)) 
        if (val === 1) answer.push(key)
    console.log(answer)
    return answer[k-1] || ""
};