/*
1370. Increasing Decreasing String
https://leetcode.com/problems/increasing-decreasing-string/


You are given a string s. Reorder the string using the following algorithm:

Pick the smallest character from s and append it to the result.
Pick the smallest character from s which is greater than the last appended character to the result and append it.
Repeat step 2 until you cannot pick more characters.
Pick the largest character from s and append it to the result.
Pick the largest character from s which is smaller than the last appended character to the result and append it.
Repeat step 5 until you cannot pick more characters.
Repeat the steps from 1 to 6 until you pick all characters from s.
In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.



STEPS: 





*/



//solution 1
const sortString = (s) => {
    let arr = Array.from(s), ret = '';
  
    arr.sort();
  
    while (arr.length) {
      arr = arr.filter((x, i) => {
        if (i === 0 || x !== ret[ret.length - 1]) {
          ret += x;
          return false;
        }
        return true;
      });
  
      arr.reverse();
    }
  
    return ret;
  };




//solution 2
var sortString = function(s) {
    let temp = new Array(26).fill(0);
    let ans = [];
    
    for (let i=0; i<s.length; i++) {
        temp[s.charCodeAt(i) - 97] += 1;   
    }
   
    let flag = true;
    while(ans.length < s.length) {
       for (let i=0; i<temp.length; i++) {
           var pos = i;
           if (!flag) {
               pos = 25-i;
           }
           if (temp[pos] !==0) {
               ans.push(String.fromCharCode(pos+97));
               temp[pos] -= 1;
           }
       }
        
       flag = !flag; 
    }
    ans = ans.join('');
    
    return ans;

};