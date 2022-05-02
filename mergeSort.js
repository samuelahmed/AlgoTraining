
//helper function - merges together two ordered lists
//UGLY AND BAD WITH JUST LET - REUPDATE TO CONST & LEARN LOGIC BETTER
merge = (leftArray, rightArray) => {
    let output = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {  //end condition
        let leftElement = leftArray[leftIndex];
        let rightElement = rightArray[rightIndex];
        if(leftElement < rightElement) {
            output.push(leftElement)
            leftIndex += 1
        }
        else {
            output.push(rightElement)
            rightIndex += 1
        }
    }
    return [...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)]; //...seperate array into comma seperated values 
};
// recursive function
mergeSort = array => {
    if (array.length <= 1) {
        return array; 
    }

    let middleIndex = Math.floor(array.length / 2)
    let leftArray = array.slice(0, middleIndex)
    let rightArray = array.slice(middleIndex) //empty parameter = (middleIndex, array.lenght -1)

    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );
  }

  console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92,334,234234234234,23,42425525252,234,13234234234,343242]));








