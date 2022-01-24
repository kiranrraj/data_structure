// Author       : Kiran Raj R
// Creation Date: 24/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Binary Tree -- Breadth First 
// Usage        : Find the sum of values in the node.  

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const breadthFirstSum = (root) =>{

    if (!root) return 0;
    let queue = [root], sum = 0;

    while(queue.length > 0) {

        const current = queue.shift();
        sum = sum + current.value;
        if(current.right) queue.push(current.right);
        if(current.left) queue.push(current.left);
    }

    return sum;
};

let node1 = new Node(10);
let node2 = new Node(10);
let node3 = new Node(5);
let node4 = new Node(16);
let node5 = new Node(14);
let node6 = new Node(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

let result = breadthFirstSum(node1);
console.log(result);