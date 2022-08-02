/*

100. Same Tree

https://leetcode.com/problems/same-tree/



If no p and q return true
if no p or queue, or p.val is not equal to q.val return false
returse recursive isSameTree(p.left and q.left) && isSameTree(p.right and q.right)



*/


const isSameTree = (p, q) => {

    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) {
        return false;    
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};