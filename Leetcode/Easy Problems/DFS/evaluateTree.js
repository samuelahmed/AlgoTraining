/*
2331. Evaluate Boolean Binary Tree
https://leetcode.com/problems/evaluate-boolean-binary-tree/


You are given the root of a full binary tree with the following properties:

Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
The evaluation of a node is as follows:

If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
Return the boolean result of evaluating the root node.

A full binary tree is a binary tree where each node has either 0 or 2 children.

A leaf node is a node that has zero children.


NOTES:
Create new function dfs (node)
If no node return
If node.val is 0 return false
If node.val is 1 return true
If node.val is 2 result dfs(node.left) || dfs(node.right)
If node.val is 3 result dfs(node.left) && dfs(node.right)
Return dfs[root]



*/



const evaluateTree = (root) => {
    
    const dfs = (node) => {
        
        if(!node) return 
        if(node.val === 0) return false
        if(node.val === 1) return true
        if(node.val === 2) {
            return dfs(node.left) || dfs(node.right)
        } else if(node.val === 3){
            return dfs(node.left) && dfs(node.right)
        }
    };
    
    return dfs(root)
};
