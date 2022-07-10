const names = ['sam', 'bill', 'steve', 'matt']
const idx = names.indexOf('sam')
names[idx] = 'replaced-sam'
console.log(names)
//[ 'replaced-sam', 'bill', 'steve', 'matt' ]




const array = [1,2,3,4,5]
let reduceExample = array.reduce((callback, currentValue) => callback + currentValue)
// console.log(reduceExample)
//output: 15



const splitString = 'Hello,my,name,is,Sam'
let split = splitString.split(',')
// console.log(split) 
//[ 'Hello', 'my', 'name', 'is', 'Sam' ]



const fillArray = [0,1,2,3,4,5]
const fillArray2 = [0,1,2,3,4,5]
fillArray.fill(0)
// [ 0, 0, 0, 0, 0, 0 ]
fillArray2.fill(0,3,5)
// [ 0, 1, 2, 0, 0, 5 ]


//simple map example * 2
const numbers = [1,2,3,4,5];
let mapNumbers = numbers.map(nums => (nums * 2))
console.log(mapNumbers)
//[ 2, 4, 6, 8, 10 ]


//map to turn string number into reg number with Number operator
const stringNumbers = ['1', '2', '3', '4', '5']
const regNumbers = stringNumbers.map(Number)
console.log(regNumbers)
// [ 1, 2, 3, 4, 5 ]


//
