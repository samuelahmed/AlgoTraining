//BFS graph traversal 
// left to right
// queue data structure 
// queue to hold temprorarly // result arr for result 
//FIGURE HOW TO TO TEST THIS SHIT IN VSCODE
// TIME  O(n)
// SPACE O(n)

/// HAS NOT BEEN TRASFERED TO PAPER
//from: https://www.youtube.com/watch?v=k51JOgA0mw0


 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
  
//  {TreeNode} root
//  {number[][]}

root = [3,9,20,null,null,15,7]

var levelOrder = (root) => {
    if(!root) return [];

    const queue = [root];
    const result = [];

    while (queue.length) {
        let len = queue.length;
        result.push(queue.map(node => node.val));
        
        //why does += -1 NOT WORK HERE?
        while(len--){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
};

console.log(levelOrder(root, result));