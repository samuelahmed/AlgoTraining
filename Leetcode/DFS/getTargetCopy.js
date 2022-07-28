/*

1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/

Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.




STEPS: 
If !original && !cloned return false
If original === target return cloned 
Return recursive getTargetCopy(original.left, cloned.left, target)
Or recursive getTargetCopy(original.right, cloned.right, target)

*/


const getTargetCopy = (original, cloned, target) => {
    
    if(!original && !cloned) return false
    if(original === target) return cloned
    
    return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target)
};