/*
2315. Count Asterisks
https://leetcode.com/problems/count-asterisks/


You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

Return the number of '*' in s, excluding the '*' between each pair of '|'.

Note that each '|' will belong to exactly one pair.




STEPS: 


*/

var countAsterisks = function(s) {
    
    let count = 0;
    let res = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '|'){
           count ++
         }
        
        if(count % 2 === 0 && s[i] === '*'){
            res ++
        }
    }
    
    return res;
    
};



//my messy solution

var countAsterisks = function(s) {
    
    let count = 0
    let  s2 = s.split('|')
    let temp = []
     
     for(let i=0; i<s2.length; i+=2){
         temp = s2[i].split('').join('')
         for(let j=0; j<temp.length;j++){
             if(temp[j] === '*'){
                 count++
             }
         }
     }
     
     return count
 };