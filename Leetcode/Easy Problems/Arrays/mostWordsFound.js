/*/
2114. Maximum Number of Words Found in Sentences
https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

NOTES: 
1. initialize max and temp variables at zero 
2. loop through sentence.length 
3. split sentences based on paratheses and add the length of each to temp variable 
4. find which temp or max is biggest
5. return max 

/*/


const mostWordsFound = (sentence) => {
    let max = 0;
    let temp = 0;

    for(let i=0; i < sentence.length; i++){
        temp = sentence[i].split(" ").length;
        if(temp>max){
            max = temp;
        }
    }

    return max;
}


const mostWordsFound2 = (sentence) => {
    let max = 0 
    let temp = 0

    for(let i in sentence){
    temp = sentence[i].split(" ").length;
    }

    return Math.max(max, temp) 
}