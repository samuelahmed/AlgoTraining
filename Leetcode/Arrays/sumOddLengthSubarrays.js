/*/
https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
1588. Sum of All Odd Length Subarrays


Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.


/*/

const sumOddLengthSubarrays = (arr) => {
    
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