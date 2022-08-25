



function myAtoi (s) {

    let result = 0; 
    let sign = 1;
    let index = 0;
    let MAX_INT = Math.pow(2, 31) - 1;
    let MIN_INT = - Math.pow(2, 31);
    let i = 0;

    while (i < s.length && s[i] == ' ') {
        i++;
    }

    if (s[i] === '+') {
        sign = 1;
        i++
    }        
    else if (s[i] === '-') {
        sign = -1;
        i++;
    }
        
    for (; i < s.length; i++) {
        
        let num = s.charCodeAt(i) - '0'.charCodeAt(0);
        
        if (0 <= num && num <= 9) {
            result = result * 10 + num;
        } else {
            break;
        }
    }
    
    result = result * sign;
    
    return Math.max(Math.min(result, MAX_INT), MIN_INT);
}



































function myAtoi2 (s) {

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
        
        let ascii = s[i].charCodeAt(0) - 48
        
        if (ascii >= 0 && ascii <= 9) {
            result = result * 10 + (ascii);
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
}


