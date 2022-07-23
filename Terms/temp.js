// const names = ['sam', 'bill', 'steve', 'matt']
// const idx = names.indexOf('sam')
// names[idx] = 'replaced-sam'
// console.log(names)
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
// const numbers = [1,2,3,4,5];
// let mapNumbers = numbers.map(nums => (nums * 2))
//[ 2, 4, 6, 8, 10 ]


//map to turn string number into reg number with Number operator
const stringNumbers = ['1', '2', '3', '4', '5']
const regNumbers = stringNumbers.map(Number)
// [ 1, 2, 3, 4, 5 ]


//map to manipulate object
const products = [
    {
        name: 'laptop',
        price: 1500,
        count: 5
    },
    {
        name: 'desktop',
        price: 2000,
        count: 10
    },
    {
        name: 'phone',
        price: 1000,
        count: 100
    }
];

const totalProductValue = products.map(item => item.price * item.count);
//[ 7500, 20000, 100000 ]

const totalProductValueObject = products.map(item => ({
    name: item.name,
    totalValue: item.price * item.count
}));
// [
//     { name: 'laptop', totalValue: 7500 },
//     { name: 'desktop', totalValue: 20000 },
//     { name: 'phone', totalValue: 100000 }
// ]




//push

// const numbers = [1,2,3,4,5]
// numbers.push(6)
//[ 1, 2, 3, 4, 5, 6 ]
// numbers.push(6,7,8,9,10)
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//note: if done in order above it would be 
//[1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
// const total = numbers.push(6,7,8,9,10)
//10
//note: would be 16 if done as above 


//splice 

// const numbers = [1,2,3,4,5];

// numbers.splice(2,3)
//[ 1, 2 ]
// let deleted = numbers.splice(2,3)
//[ 3, 4, 5 ]

// numbers.splice(2,3,6,9)
//[ 1, 2, 6, 9 ]

// numbers.splice(2,0,6,9)
//[ 1, 2, 6, 9, 3, 4, 5 ]


//Bitwise XOR
//0 & 0 = 0 
//0 & 1 = 1
//1 & 1 = 0 



const numbers = [1,2,3,4,5,-1]

// const res = numbers.some(greaterThanThree)

// function greaterThanThree(num) {
//     return num > 3;
// }

// const res = numbers.every(isPositive)
//false
function isPositive(num) {
    return num > 0;
}



const names = ['Sam', 'Gabe', 'Troy']

const namedPerson = names.find(findName)
//Gabe

function findName(name) {
    return name === 'Gabe'
}


// const res = names.includes('Sam')
// true
// const res = names.includes('Bill')
// false

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
//   const result = inventory.find( ({ name }) => name === 'cherries' );
  //{ name: 'cherries', quantity: 5 }
//   const result = inventory.find( ({ name }) => name === 'cherries' ).quantity;
  //5



// let testString = '1337demo' 
// let parseIntDemo = parseInt(testString)
//1337


let testString = 'doesnotwork1337.37.37demo'
let parseIntDemo = parseInt(testString)
//NaN

console.log(parseIntDemo)
