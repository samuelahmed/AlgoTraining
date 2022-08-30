/*
506. Relative Ranks
https://leetcode.com/problems/relative-ranks/
You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

The 1st place athlete's rank is "Gold Medal".
The 2nd place athlete's rank is "Silver Medal".
The 3rd place athlete's rank is "Bronze Medal".
For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
Return an array answer of size n where answer[i] is the rank of the ith athlete.


STEPS:


*/

//Assuming PriorityQueue Library Available
const findRelativeRanks = function (score) {
    
    let ranks = new MaxPriorityQueue();

    for (let i = 0; i < score.length; i++) {
        ranks.enqueue(i, score[i]);
    }
        for (let i = 0; i < score.length; i++) {
            const item = ranks.dequeue();
            let rank;
            
            switch (i) {
                case 0:
                    rank = "Gold Medal";
                    break;
                case 1:
                    rank = "Silver Medal";
                    break;
                case 2:
                    rank = "Bronze Medal";
                    break;
                default:
                    rank = (i + 1).toString();
            }
        score[item.element] = rank;
        }
    
    return score;
};