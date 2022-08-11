
/*
232. Implement Queue using Stacks
https://leetcode.com/problems/implement-queue-using-stacks/

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

STEPS:



*/


const MyQueue = function() {
    this.stack = [];
    this.reversed = [];
};

MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

MyQueue.prototype.pop = function() {
    if (!this.reversed.length) {
        while (this.stack.length) {
            this.reversed.push(this.stack.pop());
        }
    }
    
    return this.reversed.pop();
};

MyQueue.prototype.peek = function() {
    return this.reversed[this.reversed.length - 1] ?? this.stack[0];
};

MyQueue.prototype.empty = function() {
    return !this.stack.length && !this.reversed.length;
};
