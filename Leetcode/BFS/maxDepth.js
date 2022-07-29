
/*



559. Maximum Depth of N-ary Tree
https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

STEPS:
Initialize result at 0
Initialize queue as empty array
If !root return result
Queue.push(root)
While queue.length let n = queue.length
For loop where i < n 
Let node = queue.shift()
Push ...node.children into queue
Result++ 
Return result


*/


const maxDepth = (root) => {
    
    let result = 0;
    let queue = [];
    
    if(!root) return result;
    queue.push(root);
    
    while(queue.length){
        
        let n = queue.length;
        
        for(let i = 0; i<n; i++){
            let node = queue.shift();
            queue.push(...node.children);
        }
        result++;
    }
    
    return result;
};
