/*
270. Closest Binary Search Tree Value
https://leetcode.com/problems/closest-binary-search-tree-value/


Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.

STEPS:
Initialize child as root.left if target lessthen root.val else as root.right
If no child return root.val
Set closest as recursive(child, target)
Return closest if Math.abs(closest - target) < Math.abs(root.val - target) else return root.val
*/



//Recursive
const closestValue = (root, target) => {
    
    let child = target < root.val ? root.left : root.right;
    if (!child) return root.val;
    let closest = closestValue(child, target);
    
    return Math.abs(closest - target) < Math.abs(root.val - target) ? closest : root.val;
};







//Iterative
var closestValue2 = function(root, target) {
    var closest = root.val;
    
    while (root) {
        if (Math.abs(root.val - target) < Math.abs(closest - target)) {
            closest = root.val;
        }
        
        if (root.val === target) break; // early terminate
        
        root = target > root.val ? root.right : root.left;
    }
    
    return closest;
};