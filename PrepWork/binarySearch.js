const values = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//ITERATIVE NUMBER 1

const binary = (val, arr) => {
    let lower = 0;
    let upper = arr.length -1;

    while(lower <= upper) {
        console.log('step')
        const middle = lower + Math.floor((upper - lower) / 2);

        if(val === arr[middle]) {
            return middle; 
        }
        if (val < arr[middle]){
            upper = middle -1;
        } else {
            lower = middle + 1;
        }
    }

    return -1;
};

console.log(binary(10, values))


//RECURSIVE SOLUTION
function recursiveBinary(array, target) {
    return search(array, target, 0, array.length -1)
}

function search(array, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex) {
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === array[middleIndex]) {
        return middleIndex
    }

    if(target < array[middleIndex]) {
        return search(array, target, leftIndex, middleIndex -1)
    } else {
        return search(array, target, middleIndex + 1, rightIndex)
    }
}

console.log(recursiveBinary(values, 7))



//ITERATIVE SOLUTION NUMBER 2

function iterativeBinary(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === arr[middleIndex]) {
            return middleIndex;
        } 

        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1; 
}

console.log(iterativeBinary(values, 8))


// BIG O = O(log n)



//random big 0 cheatsheet 
// calc not depending on input size O(1)
// loop O(n)
// Nested loops O(n^2)
// input size reduced by half O(log N)