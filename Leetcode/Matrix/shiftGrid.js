/*
1260. Shift 2D Grid
https://leetcode.com/problems/shift-2d-grid/

Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

STEPS:




*/




const shiftGrid = (grid, k) => {
    
    let m = grid.length;
    
    for (let j = 0; j < k; j++) {
        for (let i = 0; i < m; i++) {
            grid[i].unshift(grid[((m + i -1) % m)].pop()); 
        }
    }
    
    return grid;
};