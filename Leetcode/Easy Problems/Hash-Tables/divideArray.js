/*
2206. Divide Array Into Equal Pairs

https://leetcode.com/problems/divide-array-into-equal-pairs/


You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.

STEPS:
Create empty map ()
Loop through nums and if map has number delete it else set the number true
Return true if map size is empty else return false


*/


const divideArray = (nums) => {
    
    let map = new Map();
      
    for (const number of nums) {
      map.has(number) ? map.delete(number) : map.set(number, true);
    }
      
    return map.size === 0;
  };