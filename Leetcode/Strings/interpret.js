/*
1678. Goal Parser Interpretation
https://leetcode.com/problems/goal-parser-interpretation/

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.



Steps. 
1. split command by () join o in place
2. split command by (al) join al in place
3. return command

*/

const interpret = (command) => {
    return command.split('()').join('o').split('(al)').join('al')
};
