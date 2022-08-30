/*
1832. Check if the Sentence Is Pangram


https://leetcode.com/problems/check-if-the-sentence-is-pangram/

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

O(n) time

//if sentence has every letter, return true else return false

Steps:
1. make new set (what does that mean)
2. split('') the sentence
3. Set size to equal 26
4. Return 

*/

var checkIfPangram = function(sentence) {
    
    return new Set(sentence.split("")).size === 26;
    
}