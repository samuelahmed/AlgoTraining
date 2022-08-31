/*
347. Top K Frequent Elements
https://leetcode.com/problems/top-k-frequent-elements/


Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



*/


const topKFrequent = function (nums, k) {
    let result = []
    let bucket = []
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    for (let [num, freq] of map) {
        bucket[freq] = (bucket[freq] || new Set()).add(num)
    }

    for(let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i])
        if (result.length === k) break
    }

    return result
}