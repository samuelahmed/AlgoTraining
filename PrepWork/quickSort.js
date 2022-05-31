// variables
// i = left - 1
// j = left
// p = pivot

// if value at j < p {increment j}
// if yes {increment i & swap value at j with value at i}
// when j hits p -> break loop & increment i one more time and swap p and i 
// at end return the array 
//time O(n log n) or O(n^2) if split is uneven
//space O(1)

const nums = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

const pivot = (nums, left, right) => {
    let p = right;
    let j = left; 
    let i = left - 1; 

    while(j <= p) {
        if(nums[j] < nums[p]) {
            i += 1;
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j += 1; 
        } else {
            j += 1;
        }
    }
    i += 1; 
    [nums[i], nums[p]] = [nums[p], nums[i]];

    return i;
}

const quickSort = (nums, left = 0, right = nums.length - 1) => {
    if(left < right) {
        let pIdx = pivot(nums, left, right);

        quickSort(nums, left, pIdx - 1);
        quickSort(nums, pIdx + 1, right);
    }
    return nums; 
}



console.log(quickSort(nums))
