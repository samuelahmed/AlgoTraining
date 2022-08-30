/*
841. Keys and Rooms
https://leetcode.com/problems/keys-and-rooms/


There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

STEPS:


*/


//DFS

const canVisitAllRooms = (rooms) => { 
    
    let visitedRoom = {};
    
    const dfs = (index) => {
        if(visitedRoom[index]) return;
        visitedRoom[index] = true;
        rooms[index].forEach(key => { 
            dfs(key)
        });
    };
    dfs(0);
    
    return Object.keys(visitedRoom).length === rooms.length;
};