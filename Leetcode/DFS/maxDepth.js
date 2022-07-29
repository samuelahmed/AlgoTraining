/*
104. Maximum Depth of Binary Tree
https://leetcode.com/problems/maximum-depth-of-binary-tree/

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

NOTES: 
Check for empty tress with if root is undefined or null and return zero
Return math max of recursive call maxDepth for root left and root right plus one

*/





const maxDepth = (root) => {
    
    if(root === undefined || root === null){
        return 0
    }
    
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};



const maxDepth = (root) => {
    
    let result = 0;
    
    const bfs = (node, level) => {
        
        if (!node) return;
        if(level > result) result = level; 
        
        bfs(node.left, level +1);
        bfs(node.right, level +1);
    };
    
    bfs(root, 1);
    return result;
};