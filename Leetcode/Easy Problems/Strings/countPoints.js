/*
2103. Rings and Rods

https://leetcode.com/problems/rings-and-rods/

There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

Return the number of rods that have all three colors of rings on them.

STEPS: 
Initialize new Map() called map
Initialize answer int to zero 
Loop through rings.length 
Set color to rings[i]
Set rod to +rings[i+1]
If !map has rod Map.set rod, new Set()
Map.get rod.add(color)
Loop through map with [rod, setColors]
If set color size is equal to 3 answer ++
Return answer

*/




const countPoints = (rings) => {
    
    let map = new Map()
    let answer = 0
    
    for(let i = 0; i<rings.length; i += 2){
        let color = rings[i]
        let rod = +rings[i + 1]
        
        if(!map.has(rod))
            map.set(rod, new Set())
            map.get(rod).add(color)
    }
    
    for(let [rod, setColors] of map){
        if(setColors.size === 3){
            answer++
        }
    }
    
    return answer
}



//slower solution maybe?
var countPoints2 = function(rings) {

    let rods = Array(10).fill("");

    for(let i = 0; i < rings.length; i += 2){
        if(!(rods[rings[i+1]].includes(rings[i]))) rods[rings[i+1]] += rings[i]
    }
    
    return rods.filter(rod => rod.length > 2).length
};
