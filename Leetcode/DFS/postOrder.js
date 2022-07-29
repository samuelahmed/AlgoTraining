/*

590. N-ary Tree Postorder Traversal
https://leetcode.com/problems/n-ary-tree-postorder-traversal/

Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

STEPS: 
Initialize result as empty array
Recurse(root) and return result
Create recurse function with (node)
If no node return result
Loop through child of node.children 
Recurse child
push node.val into results




*/

const postorder = (root) => {

    let result = [];

    recurse(root);
    return result;

    function recurse(node) {
        
        if (!node) return result;
        for (let child of node.children) {
            recurse(child);
        }
        result.push(node.val);
    }
};