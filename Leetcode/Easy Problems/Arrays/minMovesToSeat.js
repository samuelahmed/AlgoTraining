/*



2037. Minimum Number of Moves to Seat Everyone
https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/



There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

You may perform the following move any number of times:

Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

Note that there may be multiple seats or students in the same position at the beginning.




//seats - position of seats
//students  - position of students - can move students by 1 +- set at time 
//move student position [1,2,3...,n] to match seats [1,2,3...n] position 



//initialize answer variable 
//sort seats
//sort students 
//loop through arrays finding the absolute value of the number and += to answer
//Return answer



*/



const minMovesToSeat = (seats, students) => {
    
    let answer = 0
    
    seats = seats.sort((a,b) => a-b)
    students = students.sort((a,b) => a-b)
    
    for(let i in seats){
        answer += Math.abs(seats[i] - students[i])
    }
    
    return answer
};