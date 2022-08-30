/*
733. Flood Fill
https://leetcode.com/problems/flood-fill/


An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.


STEPS:

Initialize currColor as image[sr][sc]
Initialize queue as [[sr,sc]];
if currColor === color return image 
While queue.length let [row,col] = queue.shift()
If image[row][col] === currColor update them to color
UP If row - greaterthan or equal to 0 queue.push row-1,col 
DOWN If row + 1 less than image.length queue push row + 1, col
RIGHT If col + 1 less than image[0].length queue push row, col +1
LEFT if col - 1 greater than or equal to zero queue.push row, col-1
Return image
*/




const floodFill = (image, sr, sc, color) => {
    
    let currColor = image[sr][sc];
    let queue = [[sr, sc]];
    
    if(currColor === color) return image;
    
    while(queue.length !== 0){
        
        let [row, col] = queue.shift();
        
        if(image[row][col] === currColor){
            image[row][col] = color;
            if(row - 1 >= 0) queue.push([row-1, col]); 
            //up
            if(row + 1 < image.length) queue.push([row + 1, col]);
            //down
            if(col + 1 < image[0].length) queue.push([row, col+1]);
            //right
            if(col -1 >=0) queue.push([row, col-1]);
            //left
        }        
    }
    
    return image;
};