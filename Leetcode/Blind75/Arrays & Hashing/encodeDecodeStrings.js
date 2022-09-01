/*
271. Encode and Decode Strings
https://leetcode.com/problems/encode-and-decode-strings/

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

You are not allowed to solve the problem using any serialize methods (such as eval).

*/



const encode = function (strs) {
    return strs.reduce((result, strs) => {
        return result += (strs.length + '/' + strs)}, '')
}

const decode = function(s) {
    let result = [];

    while (s !== '') {
        let e  = s.search('/');
        let len = +s.substring(0, e);
        result.push(s.substring(e+1, e + len + 1))
        s = s.slice(e + len + 1)
    }

    return result
}