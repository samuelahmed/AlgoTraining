/*
867. Transpose Matrix
https://leetcode.com/problems/transpose-matrix/


Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

STEPS:


*/


const transpose = (matrix) => {
    
    let row = matrix.length;
    let col = matrix[0].length;
    let result = [];
    
    if(matrix.length === 0) return [];
    
    for (let i = 0; i < col; i++) {
        result[i] = [];
        for (let j = 0; j < row; j++) {
            result[i][j] = matrix[j][i];
        }
    }
    
    return result;
};