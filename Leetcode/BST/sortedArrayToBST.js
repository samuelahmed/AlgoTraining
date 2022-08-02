/*
108. Convert Sorted Array to Binary Search Tree
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

STEPS: 



*/



const sortedArrayToBST = (nums) => {

    if (!nums) return null;

    //where is low & high coming from?
    const recursive = (low, high) => {
        
        let mid = Math.floor((high + low) / 2);        
        let root = new TreeNode(nums[mid]);
    
        if (low > high) return null;
        
        root.left = recursive(low, mid - 1);
        root.right = recursive(mid + 1, high);

        return root;
    };

    return recursive(0, nums.length - 1);
};