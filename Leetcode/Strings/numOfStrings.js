/*


1967. Number of Strings That Appear as Substrings in Word

https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.



NOTES: 


*/

var numOfStrings = function(patterns, word) {

    let answer = 0
    
    for (let i =0;i<patterns.length;i++){
        if(word.includes(patterns[i])){
            answer++
        }
    }
return answer

};