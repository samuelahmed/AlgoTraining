const search = (val, arr) => {
    for (let i=0; i < arr.length; i += 1) {
        console.log(i)
        if (val === arr[i]) {
        return i; 
        }
    } 
    return 'NOT FOUND';
};

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(search(12, values))

