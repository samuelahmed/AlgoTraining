/*
1935. Maximum Number of Words You Can Type

https://leetcode.com/problems/maximum-number-of-words-you-can-type/

There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.




STEPS:
Initialize empty answer variable
Set t = true 
Create new Set with brokenLetter split into characters
Loop through text and set letter to charAt(i)
If set has letter set t to false 
If letter is empty or letter is there increase by one, set t to true again
If t is there, increase answer by 1
Return answer



*/






// with set 0(n)
const canBeTypedWords = (text, brokenLetters) => {
    let answer = 0;
    let t = true;
    let set = new Set(brokenLetters.split(''));
    
    for(let i=0;i<text.length;i++){
        let letter = text.charAt(i);
        if(set.has(letter)) t = false;
        if(letter==' ') {
            if(t) answer += 1;
            t = true;
        }
    }
    if(t) answer += 1;
    
    return answer;
};





