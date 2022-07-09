//1313. Decompress Run-Length Encoded List
/*/
https://leetcode.com/problems/decompress-run-length-encoded-list/
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.
/*/

const decompressRLEList = (nums) => {

    const result = [];

    for (let i=1; i< nums.length; i+=2){
        result.push(...new Array(nums[i-1]).fill(nums[i]));
    }
    return result;
}