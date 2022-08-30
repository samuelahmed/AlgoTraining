/*

1351. Count Negative Numbers in a Sorted Matrix
https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.


STEPS:

*/






const countNegatives = (grid) => {
    
    let result = 0;
    
    for (let i = 0; i < grid.length; i++) {
      for (let j = grid[i].length - 1; j >= 0; j--) {
        if (grid[i][j] < 0) {
          result += 1;
        }
      }
    }
    
    return result;
};




//Using flat() - time: O(m*n) space: O(n)
const countNegativesFlat = (grid) => {
    
    return grid.flat().filter(ele => ele < 0).length;
};