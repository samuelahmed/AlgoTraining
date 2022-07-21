/*
1742. Maximum Number of Balls in a Box

https://leetcode.com/problems/maximum-number-of-balls-in-a-box/

You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.

Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.

Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.



STEPS:



*/

const countBalls = (lowLimit, highLimit) => {
     
    let map = new Map();
       
    for (let i = lowLimit, sum = 0; i <= highLimit; i++, sum = 0) {
      for (let j = i; j; j = Math.trunc(j / 10)) {
          sum += j % 10;
      }
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  
    return Math.max(...map.values());
};
