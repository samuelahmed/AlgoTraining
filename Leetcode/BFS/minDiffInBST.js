/*
783. Minimum Distance Between BST Nodes

Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.


STEPS:





*/
const minDiffInBST = (root) => {
    let prev = null;
    let result = Infinity;
    
    const recursive = (node) => {
        if (!node) return;
        recursive(node.left);
        if (prev) {
            result = Math.min(result, Math.abs(node.val - prev.val));
        }
        prev = node;
        recursive(node.right);
    };
    
    recursive(root);
    return result;
};


//ITERATIVE
const minDiffInBST = root => {
    
    const stack = [];
    let curr = root, prev = null, min = Infinity;
    
    while (stack.length || curr) {
        if (curr) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            if (prev) {
                min = Math.min(min, Math.abs(curr.val - prev.val))
            }
            prev = curr;		
            curr = curr.right;
        }
    }
    
    return min;
};