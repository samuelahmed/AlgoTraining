/*
1684. Count the Number of Consistent Strings
https://leetcode.com/problems/count-the-number-of-consistent-strings/


You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.


STEPS: 




*/







//solution with loops
const countConsistentStrings1 = (allowed, words) => {
    let result = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
  
      for (let j = 0; j < word.length; j++) {
        const char = word[j];
  
        if (!allowed.includes(char)) break;
        else if (j === word.length - 1) result.push(word)
      }
    }
  
    return result.length;
  };



//short ES6 solution 
const countConsistentStrings = (allowed, words) => {
    let set = new Set(allowed)
    return words.reduce((a, w) => {
      return w.split('').every(l => set.has(l)) ? ++a : a
    }, 0)
  }