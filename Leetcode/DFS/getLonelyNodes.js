/*
1469. Find All The Lonely Nodes
https://leetcode.com/problems/find-all-the-lonely-nodes/


In a binary tree, a lonely node is a node that is the only child of its parent node. The root of the tree is not lonely because it does not have a parent node.

Given the root of a binary tree, return an array containing the values of all lonely nodes in the tree. Return the list in any order.



NOTES:

*/


const getLonelyNodes = (root) => {

    let result = []

    const dfs = root => {

        if (!root) return result
        if (!root.left && root.right) {
            result.push(root.right.val)
        }
        if (!root.right && root.left) {
            result.push(root.left.val) 
        }
        dfs(root.left)
        dfs(root.right)
    };

    dfs(root)
    return result
};