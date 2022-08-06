/*
1008. Construct Binary Search Tree from Preorder Traversal
https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/

STEPS: 
Construct recursive function with lower, upper 
If preorder[0] less than lower or greaterthan upper return null
If preorder.length === 0 return null 
Initialize root as new TreeNode and shift first item of preorder into it
Set root.left as recursive(lower, root.val)
Set root.right as recursive(root.val, upper)
Return root
Return recursive(-Infinity, Infinity)


*/




//RECURIVE
const bstFromPreorder = (preorder) => {
    
    const recursive = function(lower, upper) {
        if (preorder[0] < lower || preorder[0] > upper) return null;
        if (preorder.length == 0) return null;
        let root = new TreeNode(preorder.shift());
        root.left = recursive(lower, root.val);
        root.right = recursive(root.val, upper);
        return root;
    };
    
    return recursive(-Infinity, Infinity);
};


//longer solution
const bstFromPreorder2 = (preorder) => {

    let res = new TreeNode(preorder[0]);
    const insert = (root, val) => {
        if (root === null) return new TreeNode(val);
        if (val < root.val) {
            root.left = insert(root.left, val);
        } else {
            root.right = insert(root.right, val);
        }
        return root;
    };

    if (preorder.length === 0) return null;
    if (preorder.length === 1) return new TreeNode(preorder[0]);

    for (let i = 1; i < preorder.length; i++) {
        res = insert(res, preorder[i]);
    }

    return res;
};