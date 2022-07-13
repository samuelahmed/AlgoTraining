/*




Notes:


*/


var decodeMessage = function(key, message) {
    
    let map = new Map();
    let start=97;
	let result="";
	    
    for(let i=0; i<key.length;i++){
        if(map.has(key[i])||key[i]===" "){
            continue
        } else {
        map.set(key[i],String.fromCharCode(start++)) 
        }
    }
    
    map.set(" "," "); // for empty space
    
    for(let m of message){
        result+=map.get(m)
    }
    
    return result
};