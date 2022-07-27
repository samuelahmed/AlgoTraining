/*
746. Min Cost Climbing Stairs
https://leetcode.com/problems/min-cost-climbing-stairs/


You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.


NOTES:
Initialize L array at cost[0]
Initialize R array at cost[1]
Initialize current as empty array
if cost.length === 1 return zero
If cost.length === 2 return math.min(L, R)
Loop through cost starting from 2
Set current to cost[i] + math.min(L, R)
Set L to R
Set R to current
Return Math.min(L, R)



*/


const minCostClimbingStairs = (cost) => {

    let L = cost[0]
    let R = cost[1]
    let current = []
    
    if (cost.length === 1) return 0
    if (cost.length === 2) return Math.min(L, R)
    
    for (let i = 2; i < cost.length; i++) {
        current = cost[i] + Math.min(L, R)
        L = R
        R = current
    }

    return Math.min(L, R)
};