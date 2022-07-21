



let sumOfUnique = (nums) => {
    let isUnique = {};
    let sum = 0;
    for(let n of nums) {
      if(isUnique[n] === undefined) { //Encountering first time, add to sum
        sum += n;
        isUnique[n] = true;
      } else if(isUnique[n]) { //Encountering second time, subtract from sum
        sum -= n;
        isUnique[n] = false; //Set to false so third or more occurrences will not get added to sum
      }
    }
    return sum;
  }


var sumOfUnique = function(nums) {
    let result = []
    nums.forEach(function(e){
        if(nums.indexOf(e)  == nums.lastIndexOf(e)){
            result.push(e)
        } 
    })
    return result.reduce((a,b) => a + b , 0)
}





var sumOfUnique = function(nums) {
    let map = {};
    for(let num of nums) {
        map[num] ? map[num]++ : map[num] = 1 
    }
    
    console.log(map);
    
    let sum = 0;
    for(let num in map) {
        (map[num] === 1) && (sum += Number(num))
    }
    
    return sum
};

