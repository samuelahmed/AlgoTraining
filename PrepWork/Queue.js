class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    getSize() {
        return this.items.length;
    }

    isEmpty() {
        return this.getSize() === 0;
    }
}

const cars = new Queue();

cars.enqueue("honda")
cars.enqueue("toyota")
cars.enqueue("mazda")

console.log(cars.isEmpty())
console.log(cars.peek())
console.log(cars.dequeue())
console.log(cars)
console.log(cars.dequeue())
console.log(cars)
console.log(cars.dequeue())
console.log(cars)
console.log(cars.getSize())
console.log(cars.isEmpty())
