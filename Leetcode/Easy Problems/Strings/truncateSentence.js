/*
1816. Truncate Sentence
https://leetcode.com/problems/truncate-sentence/


A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.






//sentence (s)  need to be cut down to k words
STEPS: 
1. Split string so that it becomes array
2. slice the array from index 0 to index k(desired length)
3. Join the array into a string (' ') removing commans
4. Return the string
*/


var truncateSentence = function(s, k) {
    return s.split(' ').slice(0,k).join(' ')
 };