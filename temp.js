const names = ['sam', 'bill', 'steve', 'matt']
const idx = names.indexOf('sam')
names[idx] = 'replaced-sam'
console.log(names)
//[ 'replaced-sam', 'bill', 'steve', 'matt' ]




const array = [1,2,3,4,5]
let reduceExample = array.reduce((callback, currentValue) => callback + currentValue)
console.log(reduceExample)
//output: 15