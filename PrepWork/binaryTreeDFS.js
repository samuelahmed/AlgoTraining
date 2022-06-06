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



const dfsPrint = 
