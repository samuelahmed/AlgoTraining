/*/
2114. Maximum Number of Words Found in Sentences
https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

NOTES: 

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