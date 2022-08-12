/*
832. Flipping an Image
https://leetcode.com/problems/flipping-an-image/

Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].

STEPS:


*/







const flipAndInvertImage = (image) => {
    
    for (let row in image) {
        image[row] = image[row].reverse();
        image[row] = image[row].map(x => 1 - x);
    }
    
    return image;
}




const flipAndInvertImage1Line = (A) => {
    
    return A.map(row => row.reverse().map(num => num^1));
};
