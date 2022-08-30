/*
897. Increasing Order Search Tree
https://leetcode.com/problems/increasing-order-search-tree/

Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

STEPS:
Initialize null result variable
Initialize null newTree variable
Make new recurse function with node variable
If !node return result 
If no result result = newTree = node
Else newTree.left = null, newTree.right = node, newTree = newTree.right;
Call recurse on (node.right)
Call recurse on (root)
Return result 
*/

const increasingBST = (root) => {
    
    let result = null;
    let newTree = null;
    
    const recurse = (node) => {
        
        if (!node) return result;
        recurse (node.left);
        if (!result) {
            result = newTree = node;
        } else {
            node.left = null;
            newTree.right = node;
            newTree = newTree.right;
        }
        recurse (node.right);
    };

    recurse (root);
    return result;
};

