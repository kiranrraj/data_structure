// Author       : Kiran Raj R
// Creation Date: 24/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Binary Tree -- In order


// Create a tree node
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


const depthFirst = (root) =>{

    let current = root, stack = [], flag = false, resultArray = [];
    while(!flag){
        if(current != null){
            stack.push(current);
            current = current.left;
        } else {
            if(stack.length){
                current = stack.pop();
                resultArray.push(current.value);
                current = current.right;
            }else {
                flag = true;
            }
        }
    }
    return resultArray;
};

// Create nodes
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

// Adding nodes to the parent
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

let result = depthFirst(a);
console.log(result);