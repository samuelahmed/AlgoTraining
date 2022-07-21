




//with for loop (my own answer)
const findFinalValue = (nums, original) => {
        
    for(let i = 0; i<nums.length; i++){
        if(nums.includes(original)){
           original = original * 2
        }
    }
    
    return original
};


//with SET
var findFinalValueSet = function(nums, original) {
    const set = new Set(nums)
    let result = original
    
    
    while (set.has(result))
        result *= 2
    
    
    return result
};
 