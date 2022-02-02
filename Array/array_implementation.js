class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    // Helper function to shif items after the index
    shiftItems(index){
        for( let i = index; i< this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        // to delete the last item, else last and second last
        // items will be same as the for loop loops till length -1
        delete this.data[this.length - 1]
        this.length--;
    }

    // return the value at the index
    get(index) {
        return this.data[index]
    }

    // return the length 
    getLength(){
        return this.length;
    }

    // return the items in the array
    printItems(){
        let arrayString = "";
        for( let i=0; i< this.length; i++){
            arrayString+=this.data[i];
        }
        return arrayString.split("");
    }

    // push data into the araay
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // remove last elements from the array
    pop() {
        let poppedItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return poppedItem;
    }

    // delete the element at the position specified
    deleteItem(index) {
        let itemDeleted = this.data[index];
        this.shiftItems(index);
        return itemDeleted;
    }
}

const newArray = new MyArray();
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);
newArray.push(5);
newArray.push(6);
newArray.push(7);
newArray.push(8);
newArray.push(9);

console.log(`Array Elements: ${newArray.printItems()}`);
console.log(`Length of the array: ${newArray.getLength()}`);
console.log("--------------------------------------------");

console.log(`Array popped, popped item: ${newArray.pop()}`);
console.log(`Array Elements: ${newArray.printItems()}`);
console.log(`Length of the array: ${newArray.getLength()}`);
console.log("--------------------------------------------");

console.log(`Array popped, popped item: ${newArray.pop()}`);
console.log(`Array Elements: ${newArray.printItems()}`);
console.log(`Length of the array: ${newArray.getLength()}`);
console.log("--------------------------------------------");

console.log(`Value of item at index 2: ${newArray.get(2)}`);
console.log(`Value of item at index 4: ${newArray.get(4)}`);
console.log("--------------------------------------------");

console.log(`Array element at index 4 deleted: ${newArray.deleteItem(4)}`);
console.log(`Array Elements: ${newArray.printItems()}`);
console.log(`Value of item at index 2: ${newArray.get(2)}`);
console.log(`Value of item at index 4: ${newArray.get(4)}`);
console.log("--------------------------------------------");

console.log(`Array element at index 4 deleted: ${newArray.deleteItem(0)}`);
console.log(`Array Elements: ${newArray.printItems()}`);
console.log(`Value of item at index 2: ${newArray.get(2)}`);
console.log(`Value of item at index 4: ${newArray.get(4)}`);
