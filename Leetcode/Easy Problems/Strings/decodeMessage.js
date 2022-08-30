/*
2325. Decode the Message
https://leetcode.com/problems/decode-the-message/

You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message.


Notes:
Create map variable of empty map()
Set start at 97
Initialize empty result string
For of loop through key if map has i or is empty continue 
If not set i as a string fromCharCode(start++)
map.set('', '')
For of loop through message and add map.get(m) to result
Return result

*/

const decodeMessage = (key, message) => {

    let map = new Map()
    let start = 97
    let result = ''
    
    for(let i of key){
        if(map.has(i) || i === ' '){
            continue
        } else {
            map.set(i, String.fromCharCode(start++))
        }
    }
    
    map.set(' ', ' ')
    
    for(let m of message){
        result += map.get(m)
    }
    
    return result
}














// const decodeMessage2 = (key, message) => {
    
//     let map = new Map();
//     let start=97;
//     let result="";

//     for(let i=0; i<key.length;i++){
//         if(map.has(key[i])||key[i]===" "){
//             continue
//         } else {
//         map.set(key[i],String.fromCharCode(start++)) 
//         }
//     }
    
//     map.set(" "," "); 
    
//     for(let m of message){
//         result+=map.get(m)
//     }
    
//     return result
// };