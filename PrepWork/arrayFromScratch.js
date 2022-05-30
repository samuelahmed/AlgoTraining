//NUMERIC ARRAYS key 0:x, 1:y, 2:c, etc.

let a = [1, 2, 3, 4, "food"]

console.log (a)
console.log (typeof(a))
console.log (a.length)
console.log (typeof a[3])  //number
console.log (typeof a[4])  //string



//simple for loop
for(i=0; i<a.length; i+=1){
    console.log(typeof (a[i]))
}


//interating through the array with .forEach
a.forEach((i) => {
    console.log(typeof (i))
})


console.log (a.reverse()) 


//EDITING ARRAY 

//push will edit the orignal array 
a.push(15)
console.log(a)


// .unshift
//adds at begining of array does, amends the original array
a.unshift(12)
console.log(a)

//.pop() removes the last element from the array 
a.pop()
console.log(a)

//.shift()  removes the first element from the array 
a.shift()
console.log(a)

// pop & shift do NOT accept any parameters they just remove last and first element from array 

//splice(startIndex, count, elements) 
//startIndex = where the splice begins 
//count = items to remove
//elements items to add 
// [ 'food', 4, 3, 2, 1 ]

a.splice(4, 0, 'replaced #2')
console.log(a)



//ASSOCIATIVE ARRAYS -- custom key:pairs now it is Object not Array... 
let associativeArray = []
associativeArray['one'] = 1;
associativeArray['two'] = 2;
associativeArray['three'] = 3;
associativeArray['four'] = 4;
associativeArray['five'] = 5

console.log(associativeArray)
console.log(associativeArray.length) //0 
console.log(Object.keys(associativeArray).length) //5 
console.log(associativeArray.three) // 3



let objectLiteralNotation = 
{
    1: 'first',
    2: 'second',
    3: 'third',
    4: 'fourth'
}

// console.log(objectLiteralNotation)

for (i=1; i<=Object.keys(objectLiteralNotation).length; i+=1) {
    console.log((objectLiteralNotation[i]) + " is a " + (typeof(objectLiteralNotation[i])))
}