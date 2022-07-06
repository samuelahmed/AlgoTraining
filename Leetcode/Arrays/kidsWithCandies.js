/*/
1431. Kids With the Greatest Number of Candies
https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.


NOTES
array of kids with candies = candies
i is each kid and how many candies they have
extraCandies set number can be given to any kid in array
return boolean array of whether each kid will have max candies if given the extra candies 


STEPS: 
    //create return array result 
    //add a max value to track biggest truthy input
    //loop through candies with of loop 
    //create true / false logic
    //loop through again with i loop
    //test result of each with extra candies to see if true
    //return result 
/*/



var kidsWithCandies = function(candies, extraCandies) {
    const ret = []
    let max = 0

    for (const val of candies) {
        val > max && (max = val)
    }

    for (let i = 0; i< candies.length; ++i){
        ret.push(candies[i] + extraCandies >= max);
    }

    return ret; 
}





var kidsWithCandies = function(candies, extraCandies) {
    
    let answer = []
    let max = 0
    
    for(let i=0; i<candies.length; i++){
        candies[i] > max && (max = candies[i])
    }
    
    for(let j=0; j<candies.length; j++){
        answer.push(candies[j] + extraCandies >= max)
    }
    return answer
};