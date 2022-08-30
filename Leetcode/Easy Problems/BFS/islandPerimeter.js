
/*
463. Island Perimeter

https://leetcode.com/problems/island-perimeter/submissions/


You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.


STEPS:
Initialize result as zero
Initialize rows as grid.length
Initialize cols as grid[0].length
For loop through rows with row
For loop through cols with col
If !grid[row][col] continue
Result += 4
If row > 0 && grid[row-1][col] result --
If col > 0 && grid[row][col - 1] result --
If row < rows - 1 && grid[row+1][col] result --
if col < cols -1 && grid[row][col+1] result --
Return result



*/







const islandPerimeter = (grid) => {
    
    let result = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            
            if(!grid[row][col]) continue;
            result += 4;
            
            if(row > 0 && grid[row - 1][col]) result--;
            if(col > 0 && grid[row][col - 1]) result--;
            if(row < rows - 1 && grid[row + 1][col]) result--;
            if(col < cols - 1 && grid[row][col + 1]) result--;
        };
    };
    
    return result
};