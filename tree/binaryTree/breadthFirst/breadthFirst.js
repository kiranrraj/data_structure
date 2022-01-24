// Author       : Kiran Raj R
// Creation Date: 24/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Binary Tree 
//                               -- Breadth Search

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const breadthSearch = (root) =>{

    if (!root) return [];
    const queue = [root], resultArray = [];

    while(queue.length > 0){
        const current = queue.shift();
        resultArray.push(current.value);

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right); 
    }
    return resultArray;
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

let result = breadthSearch(a);
console.log(result);