/*
1572. Matrix Diagonal Sum
https://leetcode.com/problems/matrix-diagonal-sum/

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

STEPS:


*/



const diagonalSum = (mat) => {

    let result = 0;
    let j = mat[0].length - 1;

    for (let i = 0; i < mat.length; i++, j--) {
        if (i !== j) {
            result += mat[i][j];
        }
        result += mat[i][i];
    }

    return result;
};