/*
771. Jewels and Stones
https://leetcode.com/problems/jewels-and-stones/


You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".



//jewels = 'aA'
//stones = 'aAAbbbb'
//how many stones are in jewels = case sensitive 
//count number of jewels 

STEPS: 
1. Initialize count to zero
2. Loop through jewels string
3. Loop through stones string
4. Logic to check if each part of stones is equal to jewels
5. If equal add to count
6. Return count

*/

const numJewelsInStones = (jewels, stones) => {
    
    let count = 0
    
    for(let i = 0; i<jewels.length; i++){
        for(let j=0; j<stones.length; j++){
            if(stones[j] === jewels[i]){
                count ++
            }
        }
    }

    return count
};