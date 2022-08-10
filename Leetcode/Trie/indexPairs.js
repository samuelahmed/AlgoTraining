/*
1065. Index Pairs of a String
https://leetcode.com/problems/index-pairs-of-a-string/

Given a string text and an array of strings words, return an array of all index pairs [i, j] so that the substring text[i...j] is in words.

Return the pairs [i, j] in sorted order (i.e., sort them by their first coordinate, and in case of ties sort them by their second coordinate).


STEPS:


*/




const indexPairs = (text, words) => {
    
    let trie = buildTrie(words);
    let result = [];
    
    for(let i=0; i<text.length;i++){
      let root = trie.child[text[i]];
      if(!root) continue;
      let sub = [i];
      let j = i;
      while(root){
        if(root.isWord){
          sub.push(j);
        }
        if(sub.length === 2) {
          result.push(sub.slice());
          sub.pop();
        }        
        root = root.child[text[++j]];
      }      
    }
    
  return result;
};

class Trie{
  constructor(){
    this.child = {};
    this.isWord = false;
    this.word = ''
  }
};

const buildTrie = (words, root = new Trie()) => {
    
  let og = root;
  
  for(let w of words){
    for(let s of w){
      if(!root.child[s]) root.child[s] = new Trie();
      root = root.child[s];
    }
    root.isWord = true;
    root.word = w;
    root = og;
  }
    
  return og;
};

