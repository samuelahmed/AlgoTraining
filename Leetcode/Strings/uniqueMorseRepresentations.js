
/*
804. Unique Morse Code Words

https://leetcode.com/problems/unique-morse-code-words/

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.

 

STEPS: 






*/





//BUILDING OBJECT 
const alphabet = {
    a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
    n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..' 
}

const uniqueMorseRepresentations1 = words => {  

    return new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size
}





//using SET
var uniqueMorseRepresentations = function(words) {
    var morse = [".-","-...","-.-.","-..",".","..-.",
                  "--.","....","..",".---",
                  "-.-",".-..","--","-.","---",".--.",
                  "--.-",".-.","...","-","..-","...-",
                  ".--","-..-","-.--","--.."];
    
    var transformations = new Set();
    
    for (let word of words) {        
        var trans = "";
        for (let letter of word) {
            var index = letter.charCodeAt(0) - 97;
            trans += morse[index];
        }
        
        transformations.add(trans);   
    }
    
    return transformations.size;
};