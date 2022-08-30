/*
108. Convert Sorted Array to Binary Search Tree
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

STEPS: 
If nums is empty return null
Build recursive with low, high as arguments
Let mid equal Math.floor low + high divided by 2 
Let root equal new TreeNode nums[mid]
If low is greater than high return null
Root.left = recursive(low, mid - 1)
Root.right = recursive(mid + 1, high)
Return root
Return recursive(0, nums.length - 1)

*/



const sortedArrayToBST = (nums) => {
    
    if (!nums) return null;
    
    const recursive = (low, high) => {
        
        let mid = Math.floor((low + high) / 2);
        let root = new TreeNode(nums[mid]);
        
        if(low > high) return null;
        
        root.left = recursive(low, mid - 1);
        root.right = recursive(mid + 1, high);
        
        return root;
    };
    
    return recursive(0, nums.length - 1)
};