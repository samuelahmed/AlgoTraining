/*/
https://leetcode.com/problems/shuffle-string/
1528. Shuffle String


You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

NOTES: 
//initialize empty results array
// loop through indices 1,2,3,4,5,6,7
// tie the indices result to string  result[indices[i]] = s[i]
// return the final output with joined result (if joined earlier it doesn't work will be array with 7 items.)


/*/

const restoreString = (s, indices) => {
    const result = [];
    for(let i = 0; i<s.length; i++){
        result[indices[i]] = s[i]
    }
    return result.join('');
}