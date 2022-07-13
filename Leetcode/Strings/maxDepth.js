/*




*/



//
var maxDepth2 = function(s) {

    let l = 0, r = 0
    return s.split('').reduce((depth, c) => {
        if (c === '(') l++
        if (c === ')') r++
        return Math.max(l - r, depth)
    }, 0)
}


const maxDepth = (s) => {
    let maxCount = 0
    let count = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            maxCount = Math.max(maxCount, ++count);            
        } else if (s[i] === ')') {
            count--;
        }
    }
    return maxCount;
};