/*
637. Average of Levels in Binary Tree

https://leetcode.com/problems/average-of-levels-in-binary-tree/

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 
NOTES: 
Initialize results array 
Initialize node at [root]
While node.length
Let nodeLength = node.length and row = 0
For loop through nodeLength 
Let n = node.shift(); row+= n.val
If n.left node.push(n.left)
If n.right node.push(n.right)
Result.push row/nodeLength
Return result

*/


const averageOfLevels = (root) => {
    
    let result = [];
    let node = [root];
    
    while (node.length) {
        let nodeLength = node.length; 
        let row = 0; 
        for (let i = 0; i < nodeLength; i++) {
            let n = node.shift();
            row += n.val;
            if (n.left) node.push(n.left);
            if (n.right) node.push(n.right);
        }
        result.push(row/nodeLength);
    }
    
    return result;
};