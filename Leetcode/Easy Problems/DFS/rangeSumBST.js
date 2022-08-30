/*
938. Range Sum of BST
https://leetcode.com/problems/range-sum-of-bst/

Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].



NOTES: 
Initialize result as zero
If no root return result 
If root.val is greater than or equal high && root.val is greater than or equal to low 
Result += root val
If root.val is greater than low add recusive root.left, low, high
If root.val is lower than high add recursive root.right, low, high
Return result
*/





const rangeSumBST = (root, low, high) => {

    let result = 0;

    if (!root) return result;
    if (root.val <= high && root.val >= low) {
        result += (root.val);
    }
    if (root.val > low) {
        result += rangeSumBST(root.left, low, high);
    }
    if (root.val < high) {
        result += rangeSumBST(root.right, low, high);
    }
  
    return result;
};
