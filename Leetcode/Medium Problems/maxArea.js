/*
11. Container With Most Water
https://leetcode.com/problems/container-with-most-water/


*/


const maxArea = function(height) {

    let result = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        
        let waterHeight = Math.min(height[left], height[right]);
        let area = waterHeight * (right - left);
        result = Math.max(area, result)

        if (height[left] < height[right]) {
            left++
        }
        else {
            right--
        }
    }
    return result
}