/* 
1876. Substrings of Size Three with Distinct Characters


https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/



A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

 

NOTES:
Initialize answer at zero 
For loop through s.length  - 1
Set str to  a slice of s that starts at i and goes till i+3
Make a new Set(str)
If the size of the set is === 3, += 1 to answer
Return answer

*/ 







const countGoodSubstrings = (s) => {

    let answer = 0

    for (let i = 0; i < s.length - 2; i++) {
        let str = s.slice(i, i + 3)
        let set = new Set(str)
        if (set.size === 3) answer += 1
    }

    return answer
};
