/*
700. Search in a Binary Search Tree
https://leetcode.com/problems/search-in-a-binary-search-tree/


You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null


STEPS: 


*/




const searchBST = (root, val) => {
    
    let result = [];
    
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