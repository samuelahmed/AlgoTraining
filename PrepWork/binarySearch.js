const values = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//Iterative Solution or recursive?

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

// console.log(binary(10, values))


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

// console.log(recursiveBinary(values, 7))



//ITERATIVE SOLUTION
