/*
1166. Design File System
https://leetcode.com/problems/design-file-system/

You are asked to design a file system that allows you to create new paths and associate them with different values.

The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters. For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string "" and "/" are not.

Implement the FileSystem class:

bool createPath(string path, int value) Creates a new path and associates a value to it if possible and returns true. Returns false if the path already exists or its parent path doesn't exist.
int get(string path) Returns the value associated with path or returns -1 if the path doesn't exist.


STEPS:


*/



class FileSystem {
    constructor(){
        this.cache = {'': -1};
    }
};

FileSystem.prototype.createPath = function(path, value) {
    
    let previousPath = path.slice(0, path.lastIndexOf('/'));
    
    if(this.cache[path]) return false;
    if(this.cache[previousPath]) {
        this.cache[path] = value;
    }
    
    return !!this.cache[path];
};

FileSystem.prototype.get = function(path) {
    
    return this.cache[path] || -1;
};