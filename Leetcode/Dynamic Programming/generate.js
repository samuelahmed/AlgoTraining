/*





*/ 

const generate = (n) => {
    
    let result = []
    
    for(let i=0;i<n;i++){
        result[i]=[]
        result[i][0] = result[i][i]=1
        for(let j=1;j<i;j++){
            result[i][j] = result[i-1][j]+result[i-1][j-1]
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
  