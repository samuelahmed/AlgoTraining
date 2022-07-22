/*








*/


const isIsomorphic = (s, t) => {
    
    let map = new Map()

    for(let i = 0; i<s.length; i++){
        if(!map['s' + s[i]]) map['s' + s[i]] = t[i]
        if(!map['t' + t[i]]) map['t' + t[i]] = s[i]
        if(t[i] != map['s' + s[i]] || s[i] != map['t' + t[i]]){  
            return false
        } 
    }
    
    return true;
};