/*

1662. Check If Two String Arrays are Equivalent
https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/




Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 




*/



var arrayStringsAreEqualShort = function(word1, word2) {
    return word1.join('') === word2.join('')
};


var arrayStringsAreEqual = function(word1, word2) {
    let w1 = word1.join('')
    let w2 = word2.join('')
    
    if(w1 === w2){
        return true
    } else {
        return false
    }
};