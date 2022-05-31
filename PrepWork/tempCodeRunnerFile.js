function recursiveBinary(array, target) {
//     return search(array, target, 0, array.length -1)
// }

// function search(array, target, leftIndex, rightIndex){
//     if(leftIndex > rightIndex) {
//         return -1
//     }

//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if(target === array[middleIndex]) {
//         return middleIndex
//     }

//     if(target < array[middleIndex]) {
//         return search(array, target, leftIndex, middleIndex -1)
//     } else {
//         return search(array, target, middleIndex + 1, rightIndex)
//     }
// }