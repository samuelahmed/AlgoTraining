/*
1290. Convert Binary Number in a Linked List to Integer
https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/


Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.


STEPS:
Initialize result as zero 
While loop as long as head is not null
Set result to result bitwise shift 1 or head.val
Set head to head.next
Return result

*/




const getDecimalValue = (head) => {
    
    let result = 0;
    
    while(head !== null) {
        result = (result << 1) | head.val;
        head = head.next;
    }
    
    return result;
};