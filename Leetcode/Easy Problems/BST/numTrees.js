/*
96. Unique Binary Search Trees
https://leetcode.com/problems/unique-binary-search-trees/
Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

STEPS:
Initialize result as new array n + 1 and fill with 0 
Set result[0] to 1 and result[1] to 1
For loop starting from 2 lessthen or equal to n
For loop stating from 1 lessthen or equal to i 
Set result[i] to be result[j - 1] times result[i - j]
Return result[n]
*/


//With dynamic programming
const numTrees = (n) => {
    
    let result = new Array(n + 1).fill(0);
    result[0] = 1;
    result[1] = 1;
    
    for (let i = 2; i <= n; i++){
        for (let j = 1; j <= i; j++){
            result[i] += result[j - 1] * result[i - j];
        }
    }
    
    return result[n];
};


//With math
const numTrees = (n) => {

    const factorial = ( num ) => {
        if( num <= 0 ){
            return 1;
        } else{
            return num * factorial( num - 1 );
        }
    } 

    return factorial( 2 * n ) / ( factorial( n + 1 ) * factorial( n ) );
};
