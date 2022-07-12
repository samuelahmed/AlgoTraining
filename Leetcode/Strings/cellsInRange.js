/*

2194. Cells in a Range on an Excel Sheet

https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:

<col> denotes the column number c of the cell. It is represented by alphabetical letters.
For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
<row> is the row number r of the cell. The rth row is represented by the integer r.
You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.

Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.

Steps:
1. Initialize parts of string s [col1, row1, EMPTY SPACE, col2, row2] = s
2. Initialize empty answer array
3. Loop through col and define charCode for them
4. Loop through rows
5. Push answer to a string using fromCharCode(l1) =+ n1
6. Return answer
*/


// const cellsInRange = (s) => {
//   //remember the empty space
//   const [col1, row1, ,col2, row2] = s;
//   let answer = [];

//   for (let l1 = col1.charCodeAt(0), l2 = col2.charCodeAt(0); l1 <= l2; l1++){
//     for (let n1 = +row1, n2 = +row2; n1 <= n2; n1++){
//       answer.push(String.fromCharCode(l1) + n1);
//     }
//   }
  
//   return answer
// };



// const cellsInRange = (s) => {
//   const [col1, row1, ,col2, row2] = s;
//   let answer = [];

//   for (let colChar = col1.charCodeAt(0), endChar = col2.charCodeAt(0); colChar <= endChar; colChar++){
//       for (let rowChar = +row1, rowCharEnd = +row2; rowChar <= rowCharEnd; rowChar++){
//           answer.push(String.fromCharCode(colChar) + rowChar);
//       }
//   }
  
//   return answer
// };

var cellsInRange = function(s) {
    
  let answer = []
  let [col1, row1, , col2, row2] = s
  
  for(let c = col1.charCodeAt(0), ce = col2.charCodeAt(0); c<= ce; c++){
      for(let r = +row1, re = +row2; r<=re; r++){
          answer.push(String.fromCharCode(c) + r)
      }
  }
  return answer
};