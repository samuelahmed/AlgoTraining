/*
820. Short Encoding of Words
https://leetcode.com/problems/short-encoding-of-words/

A valid encoding of an array of words is any reference string s and array of indices indices such that:

words.length == indices.length
The reference string s ends with the '#' character.
For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

STEPS: 


*/

const minimumLengthEncoding = (words) => {
    
    let trie = {};
    let leavesMap = new Map();
    let result = 0;

    for (let word of words) {
        let node = trie;
        for (let i = word.length-1; i >= 0; i--) {
            let c = word[i];
            if(!node[c]) {
                node[c] = {};
            }
            node = node[c];
        }
        leavesMap.set(node, word.length);
    }
    leavesMap.forEach((value, key) => {
        if (Object.keys(key).length === 0){
            result += value+1;
        } 
    });
    
    return result;
};