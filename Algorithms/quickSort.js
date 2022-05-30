quickSort = (array) => {
    if (array.length === 1) {
        return array; 
    }

    const pivot = array[array.length - 1]
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < array.length - 1; i += 1) {
        if (array[i] < pivot) {
            leftArray.push(array[i]);
        }
        else {
            rightArray.push(array[i]);
        }
    }

    if (leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
    } else if (leftArray.length > 0) {
        return [...quickSort(leftArray), pivot]
    } else {
        return [pivot, ...quickSort(rightArray)]
    }
  }

const array = ([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) 
//use right most element 92 as pivot number. 

console.log(quickSort(array))