/*
230. Kth Smallest Element in a BST
https://leetcode.com/problems/kth-smallest-element-in-a-bst/

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 
STEPS:



*/



const kthSmallest = (root, k) => {
    
    let stack = [];
    let count = 0;
    let node = root;
    
    while (true){
        if (node){
            stack.push(node);
            node = node.left;
        } else {
            if (stack.length == 0) break;
            node = stack.pop();
            count += 1;
            if (count == k) return node.val;
            node = node.right;
        }
    }
};