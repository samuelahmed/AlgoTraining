var smallerNumbersThanCurrent = function (nums) {
    
    let sorted = nums.slice().sort((a,b) => a-b);

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        result.push(sorted.indexOf(nums[i]))
    }

    return result
}