/*/
1470. Shuffle the Array
https://leetcode.com/problems/shuffle-the-array/


Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

need practice


NOTES: 
//create empty answer array 
//loop through the n array with i i<n
//push into answer nums i and i+n
//return answer 

/*/

 


var shuffle = function (nums, n) {

    let res = [];

    for(let i = 0; i < n; i++){
        res.push(nums[i])
        res.push(nums[i+n])
    }

    return res
};