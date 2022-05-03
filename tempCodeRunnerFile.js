const permute = (nums) => {
//     //global result
//     const result = [];

//     //DFS recursilve helper 
//     const dfs = (i, nums) => {
//         //base case
//         if(i === nums.length) {
//             result.push(nums.slice());
//             return;
//         }
//         // DFS rescursive case
//         for(let j = i; j < nums.length; j += 1) {
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//             dfs(i + 1, nums);
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//         }
//     }
//     dfs(0, nums);
//     return result;
// };
