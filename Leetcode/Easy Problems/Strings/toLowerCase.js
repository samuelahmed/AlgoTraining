/*

709. To Lower Case
https://leetcode.com/problems/to-lower-case/



Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.




*/




//standard approach
var toLowerCase = function(s) {
    return s.toLowerCase()
};



//calculating hex code 
//hex code for letter 'A' is 0x41 and for letter 'a' is 0x61. That's a diff of 0x20.
var toLowerCase = function(str) {
    let i = 0;
    let lowerCase = "";
    
    while (i < str.length) {
        lowerCase += String.fromCharCode(str.charCodeAt(i) | 0x20);
        i++;
    }
    return lowerCase;
};