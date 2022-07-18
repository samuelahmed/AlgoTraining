/*
412. Fizz Buzz

https://leetcode.com/problems/fizz-buzz/


Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

STEPS
Initialize empty answer array
Loop through n starting at 1 and ending when <= n
If i  modulo 15 is equal to zero push string 'FizzBuzz'
Else if i  modulo 5 is equal to zero push string 'Buzz'
Else if i  modulo 3 is equal to zero push string 'Fizz'
Else push string i 
Return Answer 
*/

// time O(n) space O(n)
const fizzBuzz = (n) => {
    const result = []
    
    for(let i=1; i<=n; i++) {
        if(i % 15 === 0 ) {
            result.push('FizzBuzz')
        } else if(i % 3 === 0) {
            result.push('Fizz')
        } else if(i % 5 === 0) {
            result.push('Buzz')
        } else {
            result.push(i.toString())
            //answer.push(String(i))
        }
    }
    
    return result
};





var fizzBuzz = function(n) {
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i)
};