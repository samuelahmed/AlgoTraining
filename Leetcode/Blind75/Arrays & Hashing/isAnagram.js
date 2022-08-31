/*
242. Valid Anagram
https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/


function isAnagram (s, t) {
    let map = {};

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] + 1 || 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) return false;
        map[t[i]]--;
    }

    return true;
}