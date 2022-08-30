/*
1025. Divisor Game
https://leetcode.com/problems/divisor-game/


Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

Choosing any x with 0 < x < n and n % x == 0.
Replacing the number n on the chalkboard with n - x.
Also, if a player cannot make a move, they lose the game.

Return true if and only if Alice wins the game, assuming both players play optimally.


STEPS: 
return n % 2 === 0 
*/



const divisorGame = (n) => {
    return n % 2 === 0
};


const divisorGame2 = n => {
    
    let result = Array(n + 1).fill(false)
    
    for (let i = 2; i <= n; ++i){
        for (let j = Math.floor(Math.sqrt(i)); 1 <= j; --j){
            if (!(i % j) && !result[i - j]){
                result[i] = true
            }
        }
    }
   
    return result[n]
};