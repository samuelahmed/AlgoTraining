/*
206. Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/

Given the head of a singly linked list, reverse the list, and return the reversed list.


STEPS:
Initialize result as null
While loop as long as head is not null 
Set next as head.next
Set head.next as result
Set result as head
Set head as next
Return result 

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