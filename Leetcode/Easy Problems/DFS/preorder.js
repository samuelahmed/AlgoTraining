/*
589. N-ary Tree Preorder Traversal

https://leetcode.com/problems/n-ary-tree-preorder-traversal/


Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)


STEPS:
Initialize result as [] in function arguments
If !root return results 
Push root.val into results array
For of loop throuhg child of root.children
Recusive call to preorder(child, result) in loop
Return results





*/

//recursive

const preorder = (root, result = []) => {
    
    if (!root) return result;
    result.push(root.val);
    
    for (let child of root.children){
        preorder(child, result);
    }
    
    return result;
};



//iterative 
const preorderIterative = (root) => {

    let stack = [];
    let result = [];

    if (!root) {
        return result;
    }
    stack.push(root);

    while(stack.length) {
        let node = stack.pop();
        result.push(node.val);
        for(let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }

    return result;
};