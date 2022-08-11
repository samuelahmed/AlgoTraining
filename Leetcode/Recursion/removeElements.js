/*
203. Remove Linked List Elements
https://leetcode.com/problems/remove-linked-list-elements/

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

STEPS:

*/





const removeElements = (head, val) => {
    
    if (!head) return null;
    if (head.val === val) {
        return removeElements(head.next, val);
    }
    head.next = removeElements(head.next, val)
    
    return head;
};