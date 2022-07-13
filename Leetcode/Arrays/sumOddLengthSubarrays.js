/*/
https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
1588. Sum of All Odd Length Subarrays


Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.
prefix techquine 
A subarray is a contiguous subsequence of the array.
1. Initialize result at 0 
2. For loop through arr starting at 1
3. Start from second element and add to itself the first element and so on. So each index has the value of all previous indexes added to it
4. loop through all start indices 
5. End is initiatilly start and look for all odd (+=2) subarrays
6. sum up += the query in reult 
7. return result 
8. Setup helpfer sumBetween function that takes sum from start to end 



/*/


const sumOddLengthSubarrays = (arr) => {

    let result = 0;
 
    for(let i = 1; i<arr.length; i++){
        arr[i] += arr[i - 1]
    }

    for(let start = 0; start<arr.length; start++){
        for(let end = start; end<arr.length; end +=2){
            result += sumBetween(start, end)
        }
    }

    return result

    function sumBetween(start, end){
        return arr[end] - (arr[start -1] || 0)
    }
}

const sumOddLengthSubarrays5 = (arr) => {

    let count = 0;

    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if((i-j)%2==0){
                for(let k=i;k<=j;k++){
                    count+=arr[k]
                }
            }
        }
    }

    return count;
}

//answer with parseINT
//https://leetcode.com/problems/sum-of-all-odd-length-subarrays/discuss/880708/Javascript-O(n)
//0(n)
var sumOddLengthSubarrays2 = function(arr) {

    let res = 0, n = arr.length

    for(let i = 0; i< n; ++i) {
        res += parseInt(((i + 1) * (n - i) + 1) / 2) * arr[i];
    }

    return res
};


//with WHILE loop 
var sumOddLengthSubarrays3 = function(arr) {

    let i=1;
    let sum=0;

     while(i<=arr.length){
         for(let j=0;j<=arr.length-i;j++){
              for(let k=j;k<i+j;k++){
                 sum+=arr[k]
              }
         }
         i+=2
     }
     
     return sum
 };


 //weird solution need to understand

 var sumOddLengthSubarrays4 = function(arr) {
    let total=0
    
    for(let i=0;i<arr.length;i++){
        const endsWith=i+1
        const beginsWith=arr.length-i
        const totalOccurances=endsWith*beginsWith
        total+=(totalOccurances-Math.floor(totalOccurances/2))*arr[i]  // totalOccurances-evenOccurances=oddOccurances
    }
    return total
};




