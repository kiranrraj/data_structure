// Author       : Kiran Raj R
// Creation Date: 19/01/2022
// Language Used: JavaScript
// Description  : Data Structure -- Hash Table

class HashTable {
    constructor(size){
        this.table = new Array(size);
    }

    // _ is used to represent that this is a private property
    _hash(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.table.length;
        }
        return hash
    }

    keys() {
        const keysArray = [];
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }

    set(key, value){
        // generate the index in which the data need to be inserted
        // using the hash function.
        let index = this._hash(key);
        
        if(!this.table[index]) {
            console.log(this.table);
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        this.table[index].push([key, value]);
        return this.data;
    }

    get(key){
        let index = this._hash(key);
        let bucket = this.table[index];

        if(bucket){
            if(bucket.length === 0) return bucket
            for(let i = 0; i < bucket.length; i++){
                if(bucket[i][0] === key){
                    return bucket[i][1];
                }
            }
        }
        return `Data not found`
    }
}

const myHashTable = new HashTable(10);
myHashTable.set('Coconut Oil', 210);
myHashTable.set('Bread', 40);
myHashTable.set('Jam', 250);
myHashTable.set('Chicken Meat', 300);
myHashTable.set('Milk', 25);
myHashTable.set('Chocolate Spread', 320);
myHashTable.set('Onion', 30);
myHashTable.set('Cake', 550);
myHashTable.set('Dry Fruits', 500);
console.log(myHashTable.keys);
console.log(myHashTable.get('Chicken Meat'));
