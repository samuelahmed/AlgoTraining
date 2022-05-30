//could do export default up here and import Stack from "Stack.js" if you wanted to use in other files
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        if (this.items.length == 0) {
            return null;
        }
        return this.items[this.items.length -1]
    }

    getsize() {
        return this.items.length;
    }

    isEmpty() {
        return this.getSize() === 0;
    }
}


const cars = new Stack();

cars.push("honda");
cars.push("toyota");
cars.push("mazda");

console.log(cars);