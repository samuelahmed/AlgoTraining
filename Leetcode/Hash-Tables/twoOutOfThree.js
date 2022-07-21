
/*




*/



//O(n) time /space answer 
var twoOutOfThree = function(nums1, nums2, nums3) {
    const array = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)]
    const map = {}
    const result = []
    
    for(const number of array) {
        if(map[number]) {
            map[number] += 1
        } else {
            map[number] = 1
        }
    }
    
    for(const key in map) {
        if(map[key] >= 2) {
            result.push(key)
        }
    }
    
  return result  
};


//slow answer by me
var twoOutOfThree = function(nums1, nums2, nums3) {
    
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