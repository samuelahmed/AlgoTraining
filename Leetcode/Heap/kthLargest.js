/*
703. Kth Largest Element in a Stream
https://leetcode.com/problems/kth-largest-element-in-a-stream/

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

STEPS:

*/

const KthLargest = function(k, nums){
    
    this.main = new MinPriorityQueue();
    for(let i = 0; i < nums.length; i++){
        this.main.enqueue(nums[i]);
    }
    this.k = k;
    while(this.main.size() > k) this.main.dequeue().element;
};

KthLargest.prototype.add = function(val) {
    
    this.main.enqueue(val);
    if(this.main.size() > this.k) this.main.dequeue().element;
    
     return this.main.front().element;
};