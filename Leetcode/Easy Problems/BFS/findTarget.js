/*
653. Two Sum IV - Input is a BST
https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

STEPS:
Initialize set as a new set
Initialize queue as [root]
While queue.length !== 0
let n = queue.shift()
If set has(k-n.val) return true
Set.add(n.val)
If(n.left) queue push n.left
If n.right queue.push n.right
Return false





*/



const findTarget = (root, k) => {
    
    let set = new Set();
    let queue = [root];
    
    while(queue.length) {
        let n = queue.shift();
        if(set.has(k - n.val)) return true;
        set.add(n.val);
        if(n.left) queue.push(n.left);
        if(n.right) queue.push(n.right);
    }
    
    return false;
};