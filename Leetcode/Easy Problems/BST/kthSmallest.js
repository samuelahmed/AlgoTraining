/*
230. Kth Smallest Element in a BST
https://leetcode.com/problems/kth-smallest-element-in-a-bst/

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 
STEPS:

Initialize stack, counter, and node
While true if node stack.push and set node to left
Else if stack is empty continue and increse counter
If counter equal k return node.val otherwise move to node.right


*/



const kthSmallest = (root, k) => {
    
    let stack = [];
    let counter = 0;
    let node = root;
    
    while (true) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            if (stack.length === 0) break;
            node = stack.pop();
            counter += 1;
            if (counter === k) return node.val;
            node = node.right;
        }
    }
};