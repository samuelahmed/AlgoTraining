/*
1656. Design an Ordered Stream
https://leetcode.com/problems/design-an-ordered-stream/


There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

Implement the OrderedStream class:

OrderedStream(int n) Constructs the stream to take n values.
String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.
 

Example:





STEPS


*/


class OrderedStream {
    constructor(n) {
      this.pointer = 0
      this.list = []
    }
  
    insert(id, value) {
      let chunk = []
      this.list[id - 1] = value
      while(this.list[this.pointer]) {
        chunk.push(this.list[this.pointer])
        this.pointer++
      }
      return chunk
    }
  }


  class OrderedStream {
    // Define a construction function and set some values as object properties to keep our data persistent between invocations
    constructor(n) {
      this.pointer = 0
      // this will create an array of length (n) and set all values to 'undefined'
      this.list = []
    }
  
    insert(id, value) {
      // will be used to store values that pass the condition and to be returned
      let chunk = []
      // since array indices start from zero and id in this problem from 1 we need to decrement it
      this.list[id - 1] = value
      // every time we insert a value we have to look if there is a value at the index (pointer) that should be returned
      // if there is any we copy it and then iterate to the next element until the condition is no longer true
      while(this.list[this.pointer]) {
        chunk.push(this.list[this.pointer])
        this.pointer++
      }
      return chunk
    }
  }