/*
2283. Check if Number Has Equal Digit Count and Digit Value
https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

You are given a 0-indexed string num of length n consisting of digits.

Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

STEPS:
Create array with num length and fill it with zero 
For of Loop through num and increase arr[Number(i)++]
return arr.join('') if it is equal to num 
*/


//uses quite a bit of memory
const digitCount = (num) => {
    
    let arr= Array(num.length).fill(0);
    console.log(arr)


    for(let i of num){
        arr[Number(i)]++;
    }
    
    return arr.join('') === num;
};





//uses less memory but more confusing 
var digitCount = function(num) {
    const numLength = num.length;
    const numArray = num.split('').map(Number);
    let result = "";
    
    const numFreq = numArray.reduce((acc,item)=>acc.set(item,acc.get(item) + 1 || 1),new Map())
    
    for(let i=0;i<numLength;i++){
        result+=numFreq.get(i) || "0";        
    }
    
    return result === num
};