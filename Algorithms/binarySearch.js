const binarySearch = (val, arr) => {
    let lowerIndex = 0;
    let upperIndex = arr.length - 1;

    while(lowerIndex <= upperIndex){

        console.log('try');

        const middleIndex = lowerIndex + Math.floor((upperIndex - lowerIndex / 2));
        if (val === arr[middleIndex]) {
            return middleIndex
        }
        if (val < arr[middleIndex]) {
            upperIndex = middleIndex - 1;
        } else {
            lowerIndex = middleIndex + 1;
        }
    }
    return 'VALUE NOT FOUND';
}

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9999]

console.log(binarySearch(9999, values))



//(IMPORTANT) Needs to be sorted in correct order before using Binary Search


//BASIC ITERATIVE SEARCH BELOW
// const search = (val, arr) => {
//     for (let i=0; i < arr.length; i += 1) {
//         if (val === arr[i]) {
//         return i; 
//         }
//     }
//     return 'NOT FOUND';
// };


// TESTING SPEED  ADD THE CONSOLE LOG IN THE LOOP AND IT WILL DISPLAY TRY FOR EACH ATTEMPT IT DOES.
// while(lowerIndex <= upperIndex){

//     console.log('try');