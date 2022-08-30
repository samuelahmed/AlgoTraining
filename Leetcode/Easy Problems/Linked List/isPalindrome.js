/*
234. Palindrome Linked List
https://leetcode.com/problems/palindrome-linked-list/

Given the head of a singly linked list, return true if it is a palindrome.

STEPS: 
Initialize current and reverse to empty strings
While loop (head) is not null 
Set current += head.val
Set reverse to head.val + reverse 
Set head to head.next
Return current === reverse

*/


const isPalindrome = (head) => {
    
    let current = '';
    let reverse = '';
    
    while(head !== null) {
        current += head.val;
        reverse = head.val + reverse;
        head = head.next;
    }
    
    return current === reverse;
};