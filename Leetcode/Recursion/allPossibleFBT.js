/*
894. All Possible Full Binary Trees
https://leetcode.com/problems/all-possible-full-binary-trees/


Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.

Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.

A full binary tree is a binary tree where each node has exactly 0 or 2 children.

STEPS: 

*/




const allPossibleFBT = (n) => {
    
    let dp = new Array(n+1).fill(-1);
    
    return solve(n,dp);
};


const solve = (n,dp) => {
    
    let result = [];

    if(n % 2 === 0) return dp[n] = [];
    if(dp[n] !== -1) return dp[n];
    if(n === 1) return dp[n] = [new TreeNode(0)];    
    
    n = n - 1;
    
    for(let ctr = 1 ; ctr < n ; ctr ++) {
        let left = solve(ctr,dp);
        let right= solve(n-ctr,dp);
        for(let row = 0 ; row < left.length ; row ++) {
            for(let col = 0 ; col < right.length ; col ++) {   
                let node = new TreeNode(0);
                node.left = left[row];
                node.right= right[col];
                result.push(node);
            }
        }
    }
    
    return dp[n] = result;
};