/*
682. Baseball Game
https://leetcode.com/problems/baseball-game/

You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

An integer x - Record a new score of x.
"+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
Return the sum of all the scores on the record. The test cases are generated so that the answer fits in a 32-bit integer.

STEPS:


*/



const calPoints = (ops) => {
    
    let stack = [];
    let result = 0;
    
    for (let i = 0; i < ops.length; i++) {
       if (ops[i] === '+') {
            let prev = stack[stack.length - 1];
            let prev2 = stack[stack.length - 2];
            stack.push(prev + prev2);
            result += (prev + prev2);
        } else if (ops[i] === 'D') {
            let prev = stack[stack.length - 1];
            let double = prev * 2;
            stack.push(double);
            result += double
        } else if (ops[i] === 'C') {
            let remove = stack.pop();
            result -= remove;
        } else {
            const standard = parseInt(ops[i]);
            stack.push(standard);
            result += standard;
        }
    }
    
    return result;
};