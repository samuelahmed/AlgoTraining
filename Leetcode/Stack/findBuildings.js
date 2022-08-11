/*
1762. Buildings With an Ocean View
https://leetcode.com/problems/buildings-with-an-ocean-view/

There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.

The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a smaller height.

Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

STEPS:


*/



const findBuildings = (heights) => {
    
    const stack = []
    
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] >= heights[stack[stack.length - 1]]) {
            stack.pop()
        }
        stack.push(i)
    }
    
    return stack
}