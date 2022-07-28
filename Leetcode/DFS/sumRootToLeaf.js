
/*
1022. Sum of Root To Leaf Binary Numbers
https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/


You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

The test cases are generated so that the answer fits in a 32-bits integer.




*/




const sumRootToLeaf = (root) => {
    
    const dfs = (node, string) => {
        
        if(!node) return 0;
        string += node.val;
        if(!node.left && !node.right){
            return parseInt(string, 2);
        }
        
        return dfs(node.right, string) + dfs(node.left, string);
    };  
    
    return dfs(root, '');
};