class Node {
    constructor(val) {
        // value being stored + pointers to left / right children
        this.val = val;
        this.left = null;
        this.right = null;
    };
};

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);



a.left = b;
a.right =c;
b.left = d;
b.right = e;
c.right = f;

const sumTree = (root) => {
    if (root === null) return 0; 
    return sumTree(root.left) + root.val + sumTree(root.right)
};

console.log(sumTree(a))