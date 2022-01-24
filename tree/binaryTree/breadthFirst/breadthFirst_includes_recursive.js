// Author       : Kiran Raj R
// Creation Date: 24/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Binary Tree -- Breadth FIrst
// Usage        : Search for a value in the tree using recursive function.

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const breadthFirstIncludes = (root, search) =>{

    if (!root) return false;
    if(root.value === search) return true;
    return breadthFirstIncludes(root.left, search) || breadthFirstIncludes(root.right, search);
};

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

let result = breadthFirstIncludes(a, 'e');
console.log(`Found e ? ${result}`);

result = breadthFirstIncludes(a, 'h');
console.log(`Found h ? ${result}`);