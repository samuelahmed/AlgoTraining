/*
1337. The K Weakest Rows in a Matrix
https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

The number of soldiers in row i is less than the number of soldiers in row j.
Both rows have the same number of soldiers and i < j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

STEPS:

*/



//ES6
const kWeakestRows = (mat, k) => {

    return mat
        .map((e, i) => [i, e.reduce((acc, cur) => acc + cur, 0)])
        .sort((a, b) => (a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]))
        .map((x) => x[0])
        .slice(0, k);
};


//With Heap
var kWeakestRowsHeap = function(mat, k) {
    const heap = new Heap();
  
    mat.forEach((row, i) => {
      const soldiers = getSoldierCount(row);
      if (heap.size() < k) {
        heap.offer({ soldiers: soldiers, index: i });
      } else if (heap.peek().soldiers > soldiers) {
        heap.offer({ soldiers: soldiers, index: i });
        heap.poll();
      }
    });
  
    const ans = Array(k);
    for (let i = k - 1; i >= 0; i--) {
      ans[i] = heap.poll().index;
    }
    return ans;
  };
  
  const getSoldierCount = row => {
    let low = 0;
    let high = row.length - 1;
    while (low <= high) {
      const mid = low + ((high - low) >> 1);
      if (row[mid] === 1 && row[mid + 1] !== 1) return mid + 1;
      if (row[mid] === 1) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return 0;
  };
  
  class Heap {
    constructor(data = []) {
      this.data = data;
      this.comparator = (a, b) =>
        a.soldiers !== b.soldiers ? b.soldiers - a.soldiers : b.index - a.index;
      this.heapify();
    }
  
    // O(nlog(n)). In fact, O(n)
    heapify() {
      if (this.size() < 2) return;
      for (let i = 1; i < this.size(); i++) {
        this.bubbleUp(i);
      }
    }
  
    // O(1)
    peek() {
      if (this.size() === 0) return null;
      return this.data[0];
    }
  
    // O(log(n))
    offer(value) {
      this.data.push(value);
      this.bubbleUp(this.size() - 1);
    }
  
    // O(log(n))
    poll() {
      if (this.size() === 0) return null;
      const result = this.data[0];
      const last = this.data.pop();
      if (this.size() !== 0) {
        this.data[0] = last;
        this.bubbleDown(0);
      }
      return result;
    }
  
    // O(log(n))
    bubbleUp(index) {
      while (index > 0) {
        const parentIndex = (index - 1) >> 1;
        if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
          this.swap(index, parentIndex);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    // O(log(n))
    bubbleDown(index) {
      const lastIndex = this.size() - 1;
      while (true) {
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        let findIndex = index;
        if (
          leftIndex <= lastIndex &&
          this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
        ) {
          findIndex = leftIndex;
        }
        if (
          rightIndex <= lastIndex &&
          this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
        ) {
          findIndex = rightIndex;
        }
        if (index !== findIndex) {
          this.swap(index, findIndex);
          index = findIndex;
        } else {
          break;
        }
      }
    }
  
    // O(1)
    swap(index1, index2) {
      [this.data[index1], this.data[index2]] = [
        this.data[index2],
        this.data[index1]
      ];
    }
  
    // O(1)
    size() {
      return this.data.length;
    }
  }