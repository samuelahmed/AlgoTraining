//1313. Decompress Run-Length Encoded List
/*/
https://leetcode.com/problems/decompress-run-length-encoded-list/
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

1. initialize empty result array
2. loop through nums, starting from 1, increasing by 2 each time
3. push result into a new array 
4. fill new array with nums[i]
5. return result 



/*/

const decompressRLEList = (nums) => {

    const result = [];

    for (let i=1; i< nums.length; i+=2){
        result.push(...new Array(nums[i-1]).fill(nums[i]));
    }
    return result;
}