/*
119. Pascal's Triangle II
https://leetcode.com/problems/pascals-triangle-ii/


Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

STEPS: 
Initialize result as empty array
Loop through row index + 1
Set result[i] to empty array
Result [i][0] = result [i][i] = 1
Loop through i starting from 1
Set result [i][j] to result[i-1][j] + result[i-1][j-1]
Return result[rowIndex]

*/





const getRow = (rowIndex) => {

    let result = []
    
    for(let i = 0; i<rowIndex+1; i++){
        result[i] = []
        result[i][0] = result[i][i] = 1
        for(let j = 1; j < i; j++){
            result[i][j] = result[i-1][j] + result[i-1][j-1]
        }
    }
    
    return result[rowIndex]
};