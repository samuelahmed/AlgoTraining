const nums = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]


const quickSort = (array) => {
    //edge case.
    // if(array.length === 1) {
    if(array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = []; 

    for (const element of array.slice(0, array.length -1)) {
        element < pivot ? leftArr.push(element) : rightArr.push(element);
    }

    // for(let i = 0; i < array.length - 1; i += 1) {
    //     if(array[i] < pivot){
    //         leftArr.push(array[i]);
    //     } else {
    //         rightArr.push(array[i]);
    //     }
    // }


    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];

    //need to use first edge case to use all the nonsence below./
    // if(leftArr.length > 0 && rightArr.length > 0) {
    //     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    // } else if(leftArr.length > 0) {
    //     return [...quickSort(leftArr), pivot];
    // } else {
    //     return [pivot, ...quickSort(rightArr)];
    // }
}


console.log(quickSort(nums))