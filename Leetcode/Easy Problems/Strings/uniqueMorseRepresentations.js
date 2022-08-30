
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
Set const morse to morse code from questions
Initialize answer to new Set
For of loop through words with word
Initialize transform as empty string
For loop through word to seperate each character
Set i euqal to char.charCodeAt(0) - 97
Add morse[i] to transform 
Add transform to answer Set
Return size of answer set

set 



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
const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

const uniqueMorseRepresentations = (words) => {
    
    let answer = new Set
    
    for (let word of words){
        let transform = ''
        for(let char of word){
            let i = char.charCodeAt(0) - 97
            transform += morse[i]
        }
        answer.add(transform)
    }
    
    return answer.size
};