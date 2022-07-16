/*
2335. Minimum Amount of Time to Fill Cups
https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/

You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.

You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups.

STEPS
Initalize answer to zero
Sort the amount array 
Whie loop amount 1 and 2 decrement them until zero while increasing answer
Sort in the while loop to keep the biggest amounts furthest away 
Add the remaining amount to the answer in second (only 1 amount so will always be 1 per second)
Return answer
 
*/


const fillCups = (amount) => {
    
    let answer = 0;

    amount.sort((a, b) => a - b);
    
    while (amount[1] && amount[2]) {
        answer++;
        amount[1]--;
        amount[2]--;
        amount.sort((a, b) => a - b);
    }
    
        answer += amount[2];
    return answer;
};