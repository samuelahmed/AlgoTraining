
/*
1436. Destination City
https://leetcode.com/problems/destination-city/

You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

steps: 
Create new set named departure
Loop through paths and add path[0] to departure
Loop through paths again and check if subarray has second index value (if it doesnt it is unique)
If no second index value, return that value (should be destination)


*/


const destCity = (paths) => {
    
    let departure = new Set()
    
    for(let path of paths){
        departure.add(path[0])
    }
    
    for(let path of paths){
        if(!departure.has(path[1])){
            return path[1]
        }
    }
}