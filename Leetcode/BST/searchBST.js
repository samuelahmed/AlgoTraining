/*
700. Search in a Binary Search Tree
https://leetcode.com/problems/search-in-a-binary-search-tree/


You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null


STEPS: 
Initialize result as null 
Build recursive const with (node) as argument
If no node return result 
If node.val is equal to val, result = node and return result
If val lessthan node.val recursive node.left
if val greaterthan node.val recursive node.right
recursive throuhg root and return result

*/




const searchBST = (root, val) => {
    
    let result = null; 
    
    const recursive = (node) => {
        
        if(!node) return result; 
        if(node.val === val){
            result = node;
            return result;
        }
        if(val < node.val) recursive(node.left);
        if(val > node.val) recursive(node.right);
    };

    recursive(root);
    return result;
};