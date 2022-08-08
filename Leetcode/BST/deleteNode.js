/*
450. Delete Node in a BST
https://leetcode.com/problems/delete-node-in-a-bst/

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.




STEPS:
Build callDFS function with (node) if no node return null
If node.val equal key and no node.left, return right if no node.right return left
Initialize curr as node.right
While curr.left set curr as curr.left  
Set curr.left as node.left and return node.right
If key is greaterthan node.val node.right = recursive(node.right) else node.left is recurisve(node.left)
Return node and return recursive call on root




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
            curr.left = node.left;
            return node.right;
        }
        if (key > node.val) {
            node.right = callDFS(node.right);
        } else {
            node.left =  callDFS(node.left);
        }
        
        return node;
    };
    
    return callDFS(root);
};





const deleteNode2 = (root, key) => {
    
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