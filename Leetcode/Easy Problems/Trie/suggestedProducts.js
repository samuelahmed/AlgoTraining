/*
1268. Search Suggestions System
https://leetcode.com/problems/search-suggestions-system/

You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed.


*/

const suggestedProducts = (products, searchWord) => {
    
    let trie = {};
    let root = trie;
    let result = [];
    
    products.sort();
    
    for (let p of products) {
        let root = trie;
        for (let i=0;i<p.length;i++) {
            if (!root[p[i]]) root[p[i]] = {'meow':[]};
            if (root[p[i]]['meow'].length < 3){
                root[p[i]]['meow'].push(p);    
            }
            root = root[p[i]];
        }
    }
    
    for (let i=0;i<searchWord.length;i++) {
        if (root) root = root[searchWord[i]];
        result.push(!root?[]:root['meow']);
    }
    
    return result;
};