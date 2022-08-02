/*
1382. Balance a Binary Search Tree
https://leetcode.com/problems/balance-a-binary-search-tree/

Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

STEPS:





*/


const balanceBST = (root) => {
    
    let values = toArray(root);
    return toBST(values);
    
    function toBST(arr) {
        if (arr.length === 0) return null;
        if (arr.length === 1) return new TreeNode(arr[0]);
        let mid = Math.floor(arr.length / 2);
        let left = toBST(arr.slice(0, mid));
        let right = toBST(arr.slice(mid + 1));
        return new TreeNode(arr[mid], left, right);
    };
    
    function toArray(node) {
        if (!node) return [];
        return [...toArray(node.left), node.val, ...toArray(node.right)];
    };
};