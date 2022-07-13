/*
1221. Split a String in Balanced Strings

https://leetcode.com/problems/split-a-string-in-balanced-strings/

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.


STEPS: 

1. Initalize empty matches variable
2. Initalize empty balance variable
3. Loop through s.length
4. If each S[i] is equal to L add +1 to balance, else reduce it by one
5. If balance is equal to zero add +1 to matches 
6. Return matches 




*/
//O(n) O(1)

const balancedStringSplit = (s) => {
    
    let matches = 0;
    let balance = 0;

    for (let i = 0; i < s.length; i++) {
        s[i] === 'L' ? balance++ : balance--
        if (balance === 0) {
            matches++;
        }
    }

    return matches;
};



//USING STACK
var balancedStringSplitStack = function(s) {

    let matches = 0
    const stack = []

    stack.push(s[0])

    for (let i = 1; i < s.length; i++) {
        const top = stack[stack.length - 1];
        if (top !== undefined && top !== s[i]) {
          stack.pop()
        } else {
            stack.push(s[i]);
        }
        if (stack.length === 0) {
            matches += 1;
        }
    }

    return matches;
}


