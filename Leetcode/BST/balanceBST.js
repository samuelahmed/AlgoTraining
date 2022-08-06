/*
1382. Balance a Binary Search Tree
https://leetcode.com/problems/balance-a-binary-search-tree/

Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

STEPS:
Initalize builtArray as arrayBuilder(root)
Return bstBuilder(builtArray)
Construct helper arrayBuilder function 
Construct helper bstBuilder function




*/

const balanceBST = (root) => {
    
    let builtArray = arrayBuilder(root);
    
    return bstBuilder(builtArray);
};

const arrayBuilder = (node) => {
    
    if (!node) return [];
    
    return [...arrayBuilder(node.left), node.val, ...arrayBuilder(node.right)];
};

const bstBuilder = (arr) => {
    
    if (arr.length === 0) return null;
    if (arr.length === 1) return new TreeNode(arr)
    
    let mid = Math.floor(arr.length / 2);
    let left = bstBuilder(arr.slice(0, mid));
    let right = bstBuilder(arr.slice(mid + 1));
    
    return new TreeNode(arr[mid], left, right);
};