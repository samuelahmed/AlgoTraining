/*




*/





const kthDistinct = (arr, k) => {
    
    const map = {} 
    const answer = [] 
    
    arr.forEach(i => map[i] = map[i] + 1 || 1)
    
    for (let [key, val] of Object.entries(map)) 
        if (val === 1) answer.push(key)

    return answer[k-1] || ""
};