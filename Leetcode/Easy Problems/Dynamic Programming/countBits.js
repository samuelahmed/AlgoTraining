/*
338. Counting Bits

https://leetcode.com/problems/counting-bits/


Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

STEPS:
Initalize result array at [0]
Initialize offset at 1
For loop through n starting at 1, going till n+1
If offset * 2 === i then set offset to i 
result[i] is equal to 1 + result [i - offset]
Return result
*/



const countBits = (n) => {
    
    let result = [0]
    let offset = 1
      
    for (let i = 1; i < n + 1; i++) {
      if (offset * 2 === i) {
        offset = i
      }
      result[i] = 1 + result[i - offset]
    }
  
    return result
  };