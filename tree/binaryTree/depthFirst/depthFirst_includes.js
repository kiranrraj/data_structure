// Author       : Kiran Raj R
// Creation Date: 24/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Binary Tree --Depth FIrst
// Usage        : Search for a value in the tree.

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const depthSearchIncludes = (root, search) =>{

    if (!root) return [];
    const stack = [root];

    while(stack.length > 0){
        const current = stack.pop();
        if(current.value === search) return true;
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right); 
    }
    return false;
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

let result = depthSearchIncludes(a, 'e');
console.log(`Found e ? ${result}`);

result = depthSearchIncludes(a, 'h');
console.log(`Found h ? ${result}`);