// iterative or recursive 
// O(E+V) for both 
// recusive is more common approach 
// iterative can sometimes be more generalizaable 
// USES STACK (bfs uses queue)
// pop() from stack and add to printed, then look at children of what was poped
// want to bottom out before moving to another path 
// when stack is totally empty the algo is odone 


//BUILDIN A TREE 

class Node {
    constructor(val) {
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b; 
a.right = c;
b.left = d;
b.right = e;
c.right = f; 


//    Tree shape: 
//        a
//      /   \
//     b     c 
//    / \     \ 
//   d   e     f 

// END TREE BUILDING 


// ITERATIVE DEPTH FIRST TRAVERSAL (with a stack)

const depthFirstPrint = (root) => {
    const stack = [ root ];
    while (stack.length > 0) {
       const currentNode = stack.pop();
       console.log(currentNode.val);
       // add currentNode children to top of the stack
       //can flip order if you want another child at the top
       if (currentNode.right !== null){
        stack.push(currentNode.right); 
       }
       if (currentNode.left !== null){
        stack.push(currentNode.left);
       } 
    }
};

// depthFirstPrint(a)
// TIME: O(n)
// SPACE: O(n)


// RECURSIVE DEPTH FIRST TRAVERSAL 

const depthFirstRecursive = (root) => {
    //base case (if tree is empty)
    if (root === null) return; 

    console.log(root.val);
    depthFirstRecursive(root.left);
    depthFirstRecursive(root.right);
};

// depthFirstRecursive(a)
// TIME: O(n)
// SPACE: O(n)



//pre-order traversal BECAUSE PARENTS ARE PRINTED BEFORE THE CHILDREN
// SELF, LEFT, RIGHT
const preOrder = (root) => {
    if (root === null) return; 
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
};
// preOrder(a)


//post-order traversal 
const postOrder = (root) => {
    if (root === null) return; 
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
};
// postOrder(a)



//in-order traversal 
const inOrder = (root) => {
    if (root === null) return; 
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
};
// inOrder(a)




//MAKING NEW NODE (CALLED NODES WITH S) SO I CAN BUILD A SUM TREE
// THE SUM TREE IS CALLING A2 INSTEAD A IN CONSOLE LOG TO CONNECT WITH THIS TREE ISNTEAD OF THE TREE ABOVE
class Nodes {
    constructor(val) {
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}

const a2 = new Nodes(3);
const b2 = new Nodes(2);
const c2 = new Nodes(7);
const d2 = new Nodes(4);
const e2 = new Nodes(-2);
const f2 = new Nodes(5);

a2.left = b2; 
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2; 

//answer should be 19

//ITERATIVE SUM TREE
const sumTree = (root) => {
    const stack = [ root ];
    let sum = 0;
    while (stack.length > 0) {
       const currentNode = stack.pop();
       sum += currentNode.val;

       if (currentNode.right !== null){
        stack.push(currentNode.right); 
       }
       if (currentNode.left !== null){
        stack.push(currentNode.left);
       } 
    }
    return sum;
};

// console.log(sumTree(a2))


//RECURSIVE SUM TREE
const sumTreeRecursive = (root) => {
    if (root === null) return 0;
    return sumTreeRecursive(root.left) + root.val + sumTreeRecursive(root.right);
};

// console.log(sumTreeRecursive(a2))
