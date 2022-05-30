const nums = [1,2,3,4]

const subsets = (nums) => {
    //global result 
    const result = [];

    //DFS recursive helper
    const dfs = (i, nums, slate) => {
        //base case 
        if(i === nums.length) {
            result.push(slate.slice());
            return;
        }
        
        //DFS recursive cases (exclude / include)
        
        //excluded
        dfs(i + 1, nums, slate);

        //included
        slate.push(nums[i]);
        dfs(i + 1, nums, slate);
        slate.pop();
    }
    dfs(0, nums, []);
    return result;
}

console.log(subset(nums))