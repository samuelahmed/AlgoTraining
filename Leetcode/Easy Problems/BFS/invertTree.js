/*
226. Invert Binary Tree
https://leetcode.com/problems/invert-binary-tree/


Given the root of a binary tree, invert the tree, and return its root.

 

STEPS: 
Initialize queue as [root]
While queue.length let n = queue.shift()
If n != null [n.left, n.right] = [n.right, n.left]
Queue.push(n.left, n.right);
Return root

*/


const invertTree = (root) => {
    
    let queue = [root];
    
    while (queue.length) {
        
        let n = queue.shift();
        
        if(n !== null){
            [n.left, n.right] = [n.right, n.left];
            queue.push(n.left, n.right)
        }
    }
    
    return root;
};