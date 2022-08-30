/*
118. Pascal's Triangle
https://leetcode.com/problems/pascals-triangle/


Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


STEPS: 
Initialize empty results array
For loop through n 
Set result[i] to empty array 
Set result[i][0] equal to result[i][i] = 1
For loop through i starting at 1
Set result[i][j] equal to result[i-1][j] + result[i-1][j-1]
Return result


*/ 

const generate = (n) => {
    
    let result = []
    
    for(let i = 0; i<n; i++){
        result[i] = []
        result[i][0] = result[i][i] = 1
        for(let j = 1; j < i; j++){
            result[i][j] = result[i-1][j] + result[i-1][j-1]
        }
    }
    
    return result
};





const generate2 = (n) => {
    
    if (!n || n <= 0) return []
    let result = [[1]]
  
    for (let i = 1; i < n; i++) {
      let prevRow = result[result.length - 1]
      let shiftLeft = [...prevRow, 0]
      let shiftRight = [0, ...prevRow]
      
      let currentRow = shiftLeft.map((r, i) => r + shiftRight[i])
      result.push(currentRow)
    }
  
    return result
  };
  