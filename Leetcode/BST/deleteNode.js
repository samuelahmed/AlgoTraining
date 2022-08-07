/*
450. Delete Node in a BST
https://leetcode.com/problems/delete-node-in-a-bst/

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.





STEPS:




*/



const deleteNode = (root, key) => {
    
    const callDFS = (node) => {
        if (!node) return null;
        if (node.val === key) {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            let curr = node.right;
            while (curr.left) {
                curr = curr.left;
            }
            curr.left = node.left
            return node.right;
        }
        if (key > node.val) {
            node.right = callDFS(node.right);
        } else {
            node.left = callDFS(node.left);
        }
        return node;
    };
    
    return callDFS(root);
};

const deleteNode = (root, key) => {
    
    const callDFS = (node) => {
        if(!node) return null;
        if(node.val === key) {
            if(!node.left) return node.right;
            if(!node.right) return node.left;
            let curr = node.right;
            while(curr.left) curr = curr.left;
            curr.left = node.left;
            return node.right;
        }
        if(key > node.val) node.right = callDFS(node.right);
        else node.left = callDFS(node.left);
        
        return node;
    };
    
    return callDFS(root);
};