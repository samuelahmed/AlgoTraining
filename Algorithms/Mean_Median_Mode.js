//Mean, Median, Mode 
//FUN STUFF mostly 




// write some algorithms that find the mean, median, and mode of an array





const arr = [1,1,1,1,1,1445,342,33,2,43424,34,37,423,32,32,45]


//Mean = average of the array 

mean = (arr) => {
    let sum = 0 

    for(let num of arr) {
        sum += num 
    }
    return Math.floor(sum / arr.length);
}

// console.log(mean(arr))

//Median = middle element in the array (need to sort array) (even or odd array matters)

median = (arr) => {
    arr = arr.sort((a,b) => a - b)
    if(arr.length % 2 !== 0) {
        return arr[Math.floor(arr.length / 2)]
    } else {
        let mid1 = arr[arr.length / 2];
        let mid2 = arr[arr.length / 2 - 1];
        //Without this second math.floor I can get decimal as median...
        return Math.floor((mid1 + mid2) / 2);
    }
}
// console.log(median(arr))

mode = (arr) => {
    const arrObj = {};

    arr.forEach((elem) => {
        if (!arrObj[elem]) arrObj[elem] = 0;
        arrObj[elem] += 1;
    });

    let result = []
    let max = 0

    for(let key in arrObj) {
        if (arrObj[key] > max) {
            result = [key]
            max = arrObj[key]
        } else if(arrObj[key] === max) {
            result.push(key)
        }
    }
    if(Object.keys(arrObj).length === result.length) {
        result = []
    }
    return result
}

console.log(mode(arr))

//Mode = element that appears most frequently in the array
// ALWAYS REMEMBER TO RETURN THE RESULT!!!!!