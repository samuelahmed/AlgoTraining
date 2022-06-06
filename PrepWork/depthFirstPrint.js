//print binary tree using DFS (in order, preorder, and post order)

//DFS 
//go down towards bottom (left side)(any side is okay as long as you go to bottom first )
//then go right & cross the tree
// down then across 

// uses Stack (add / remove from the top)
//add node + children, pop top, 
// add children + pop top 
// repeat 



class Node {
    constructor(val) {
        // value being stored + pointers to left / right children
        this.val = val;
        this.left = null;
        this.right = null;
    };
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");



a.left = b;
a.right =c;
b.left = d;
b.right = e;
c.right = f;

//           a 
//          / \ 
//         b   c 
//        / \   \
//       d   e   f



const depthFirstPrint = (root) => {
    const stack = [ root ];
    while (stack.length > 0) {
        //current element, considered visited when it leaves the stack 
        const curr = stack.pop();
        console.log(curr.val)
        //add curr's children to top of stack (checking to make sure they are not null if null don't add)
        if (curr.right !== null) {
            stack.push(curr.right);
        }
        if (curr.left !== null) {
            stack.push(curr.left);
        }
    }
};

depthFirstPrint(a);

// time O(n) -> because everyone node enters 1 time
// Space O(n) -> because of the array will have max elements 

//notes: can also be done with recursion 


console.log('end of iterative solution')
console.log('start recuvsive solution')

const recursiveDepthFirstPrint = (root) => {
    //base case - if tree is empty.
    if (root === null) {
        return;
    };

    console.log(root.val);
    recursiveDepthFirstPrint(root.left);
    recursiveDepthFirstPrint(root.right);
};

// time O(n)
// space O(n)

recursiveDepthFirstPrint(a)

console.log("PRE ORDER")

//pre-order (PARENT BEFORE CHILDREN)
//SELF, LEFT,RIGHT 
const pre_orderRecursiveDepthFirstPrint = (root) => {
    //base case - if tree is empty.
    if (root === null) {
        return;
    };
    console.log(root.val);
    pre_orderRecursiveDepthFirstPrint(root.left);
    pre_orderRecursiveDepthFirstPrint(root.right);
};
pre_orderRecursiveDepthFirstPrint(a)


//post-order
// (LEFT, RIGHT, SELF) CHILDREN BEFORE SELF
// DEBFC

console.log("POST ORDER")

const post_orderRecursiveDepthFirstPrint = (root) => {
    //base case - if tree is empty.
    if (root === null) {
        return;
    };
    post_orderRecursiveDepthFirstPrint(root.left);
    post_orderRecursiveDepthFirstPrint(root.right);
    console.log(root.val);

};
post_orderRecursiveDepthFirstPrint(a)



console.log("IN ORDER")

//in-order 
//(LEFT, MYSELF, RIGHT)

const in_orderRecursiveDepthFirstPrint = (root) => {
    //base case - if tree is empty.
    if (root === null) {
        return;
    };
    in_orderRecursiveDepthFirstPrint(root.left);
    console.log(root.val);
    post_orderRecursiveDepthFirstPrint(root.right);

};
in_orderRecursiveDepthFirstPrint(a)