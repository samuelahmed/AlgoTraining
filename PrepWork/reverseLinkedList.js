// Linked list always have pointers 1 -> 2 -> 3 -> 4 -> 5 -> null 
//                           goal = 5 -> 4 -> 3 -> 2 -> 1 -> null 
// i.e. we have to flip all the pointers.

// variables :::: Current = curr, Previous = prev, NextTemporaryVariable = next 

//attempt at implemeting a linkedlist
        // function linkedList(){
        //     let length = 0;
        //     let head = null; 

        //     let Node = (element) => {
        //         this.element = element;
        //         this.next = null; 
        //     };

        //     this.size = () => {
        //         return length;
        //     };

        //     this.head = () => {
        //         return head;
        //     }

        //     this.add = (element) => {
        //         let node = new Node(element);
        //         if(head === null){
        //             head = node;
        //         } else {
        //             currentNode = head;

        //             while(currentNode.next){
        //                 currentNode = currentNode.next;
        //             }

        //             currentNode.next = node;
        //         }

        //         length++;
        //     }
        // };

        // this.remove = (element) => {
        //     let currentNode = head;
        //     let previousNode;
        //     if(currentNode.element === element){
        //         head = currentNode.next;
        //     }else { 
        //         while(currentNode.element !== element) {
        //             previousNode = currentNode;
        //             currentNode = currentNode.next;
        //         }
        //         previousNode.next = currentNode.next;
        //     }
        //     length --; 
        // };

  /// WORKS IN LEETCODE BUT NOT VSCODE --> NEXT IS NOT DEFINED. 


//   function ListNode(val, next) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)

//   }
//   @param {ListNode} head
//   @return {ListNode}

// head = [1, 2, 3, 4, 5];
  
let reverseList = (head) => {
    let curr = head;
    let prev = null; 
    let next; 

    while(curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

console.log(reverseList(head))
  

//first node = head 
//last node = tail
// iterative solution 2.0 

let reverseListTwo = (head) => {
    let prev = null; 
    let next = null; 
    //go from node to node and reassing the properties while updating what head / previous is 
    while(head !== null){
        next = head.next;
        head.next = prev; 
        prev = head;
        head = next;
    }
    return prev
}

// recursive method 
let reverseList = (head) => {
    if(head === null || head.next === null){
        return head
    }
    newHead = reverseList(head.next)
    head.next.next = head;
    head.next = null;
    return newHead;
};
