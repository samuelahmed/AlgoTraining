/*
206. Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/

Given the head of a singly linked list, reverse the list, and return the reversed list.


STEPS:

*/


const reverseList = (head) => {
    
    let result = null;
    
    while (head !== null) {
        let next = head.next;
        head.next = result;
        result = head;
        head = next;
    }
    
    return result;
}