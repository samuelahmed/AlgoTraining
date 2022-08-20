/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.




*/




function myAtoi (s) {

    let result = 0; 
    let sign = 1;
    let index = 0;
    let max = Math.pow(2, 31) - 1;
    let min = - Math.pow(2, 31);
    
    s = s.trim();

    if (s[0] === '+') {
        sign = 1;
        index = 1;
    }
                
    if (s[0] === '-') {
        sign = -1;
        index = 1;
    }
        
    for (let i = index; i < s.length; i++) {
        
        let ascii = s[i].charCodeAt(0);
        
        if (ascii >= 48 && ascii <= 58) {
            result = result * 10 + (ascii - 48);
        } else {
            break;
        }
    }
    result = result * sign;
    
    if (result >= max) {
        result = max;
    } else if (result <= min) {
        result = min;
    }
    
    return result;
};


































///
function myAtoi (s) {

    let result = 0; 
    let sign = 1;
    let max = Math.pow(2, 31) - 1;
    let min = - Math.pow(2, 31);
    let i = 0
    
    s = s.trim();

    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        sign = 1;
        i++;
    }
    
    while (s[i] && s[i].charCodeAt(0) - 48 >= 0 && s[i].charCodeAt(0) - 48 <= 9) {
        result = result * 10 + s[i].charCodeAt(0) - 48;
        i++;
    } 

    result = result * sign;
    
    if (result >= max) {
        result = max;
    } else if (result <= min) {
        result = min;
    }
    
    return result;
};









/////


function myAtoi (s) {

    let result = 0; 
    let sign = 1;
    let i = 0
    let max = Math.pow(2, 31) - 1;
    let min = - Math.pow(2, 31);
    let start = 0

    s = s.trim();

    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === '-') {
            if (start >= 1) {
                break
            }
            sign = -1;
            start++
        } else if (s[i] === '+') {
            if (start >= 1) {
                break
            }
            sign = 1;
            start++
            
        } else if (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57) {
            if (s[i] === '0') {
                if (start >= 1 && (s[i].charCodeAt(0) < 48 || s[i].charCodeAt(0) > 58)) {
                    console.log('meow')
                    result = 0
                    return result
                }
                start++
            }
            result = result * 10 + s[i].charCodeAt(0) - 48;
            start++
        } else if (s[i].charCodeAt(0) < 48 || s[i].charCodeAt(0) > 58) {
            if (result !== 0) {
                break
            }
            if (start >= 1) {
                return result
            }
            if (s[i] === '.') {
                break
            }

            start++
        }
    }
    
    result = result * sign;
    if (result >= max) {
        result = max;
    } else if (result <= min) {
        result = min;
    }
    
    return result;
};