/*
965. Univalued Binary Tree
https://leetcode.com/problems/univalued-binary-tree/

A binary tree is uni-valued if every node in the tree has the same value.

Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.


STEPS: 
Initialize queue as empty array
Queue.push(root)
While queue.length !== 0
Let n = queue.shift()
If n.val not equal to root.val return false
If n.left queue.push n.left
If n.right queue.push n.right
Return true


*/




const isUnivalTree = (root) => {
    
    let queue = [];
    queue.push(root);
    
    while(queue.length !== 0) {
        let n = queue.shift();
        
        if(n.val !== root.val) return false;
        if(n.left) queue.push(n.left);
        if(n.right) queue.push(n.right);
    };    
    
    return true;
};