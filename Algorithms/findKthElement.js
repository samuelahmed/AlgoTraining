// want to find the Kth (any specificed index 0-k) smallest or biggest element in an array. 
// IF ARRAY IS SORTED THE Kth SMALLEST ELEMENT WILL THE THAT INDEX NUMBER (I.E) 6TH SMALLEST IS THE #6 IN INDEX

// pick item in arrray and sort from that (last index ususally)
// move that item to the middle, everything to right is bigger , everything on left is smaller (those items may still be unsorted though)
// If you find a element smaller then goal (i.e lookig for k=6 and you get k=5, you know everyting from 5 leftwards is WRONG)
// need to resort the RIGHT side of index 5 if looking for index 6. 
// now that right side is sorted and we know that everything on LEFT or index 6 in smaller and everyting on right is bigger. 
// since we are looking for the Kth smallest element that is the correct number and we need to return. 

//EASY APPRAOCH WORKS IN LEETCODE BUT HOW TO GET TO TEST IN VSCODE?
//time: O(n log n)
//

// var findKthLargestEasy = (nums, k) => {
//     nums.sort((a, b) => b - a)
//     return nums[k - 1]
// };





// nums = [3, 2, 1, 5, 6, 4]
target = 2
nums = [3,2,3,1,2,4,5,5,6,8,8,9]


// REAL APPROACH
//find short-circuit with quick sort
// time: O(n^2) worst case, averange: ~O(n)
// space: O(1) constant
var findKthLargestBetter = (nums, k) => {
    let target 
    //QUICKSELECT
    const quickSelect = (start, end) => {
        if (start >= end) {
            target = nums[start];
            return
        }

        const pivot = nums[start];
        let insertionIndex = start + 1;

        for (let i = start + 1; i <= end; i += 1) {
            if (nums[i] >= pivot) {
                swap(i, insertionIndex);
                insertionIndex += 1;
            } 
        }
        if (insertionIndex - 1 === k - 1) {
            target = pivot
            return
        }
        swap(start, insertionIndex -1);

        if (insertionIndex - 1 > k - 1) {
            quickSelect(start, insertionIndex - 2);
        } else {
            quickSelect(insertionIndex, end);
        }
    }
    const swap = (i, j) => {
        if (i === j) return
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    quickSelect(0, nums.length - 1)
    return target
};


console.log(findKthLargestBetter(nums, target))


// console.log(findKthLargestEasy(nums, target))
//console.log
