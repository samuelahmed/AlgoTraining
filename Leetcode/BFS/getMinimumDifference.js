/*
530. Minimum Absolute Difference in BST
https://leetcode.com/problems/minimum-absolute-difference-in-bst/

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

STEPS:
Initialize result as Infinity
Initialize prev as -Infinity
Build recursive with (node) and return if node is empty
Recursive call on node.left 
Result = Math.min(result, node.val -prev)
Prev = node.val
Recusive call on node.right
Recursive call on (root)
Return result

*/



const getMinimumDifference = (root) => {
    
    let result = Infinity;
    let prev = -Infinity;
    
    const recursive = (node) => {
        if(!node) return result;
        recursive(node.left);
        result = Math.min(result, node.val - prev);
        prev = node.val;
        recursive(node.right);
    }
    
    recursive(root);
    return result;
};