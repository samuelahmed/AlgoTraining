/*
1474. Delete N Nodes After M Nodes of a Linked List
https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/

You are given the head of a linked list and two integers m and n.

Traverse the linked list and remove some nodes in the following way:

Start with the head as the current node.
Keep the first m nodes starting with the current node.
Remove the next n nodes
Keep repeating steps 2 and 3 until you reach the end of the list.
Return the head of the modified list after removing the mentioned nodes.

 
STEPS:
Initialize current as head.next, prev as head, and count to one
While current if count is equal to m + n set count to zero
If count is less than m, prev = current and current = current.next
Else if count is less than m + n, current = current.next, prev.next = current
Increment count
Return head

*/


const deleteNodes = (head, m, n) => {
    
    let current = head.next;
    let prev = head;
    let count = 1;
    
    while (current !== null) {
        if (count === m + n) count = 0;
        if (count < m) {
            prev = current;
            current = current.next;
        } else if (count < m + n) {
            current = current.next;
            prev.next = current;
        }
        count++;
    }
    
    return head;
};