function reverseString(str) {

    if(str === undefined || str === null) return "";

    let len = str.length, reversedArray = [];
    if(len < 2) return str;
    str = str.split("");

    for(let i = len-1; i >= 0; i--){
        reversedArray.push(str[i]);
    }
    return reversedArray.join("");
}

console.log(reverseString("kiran raj r"));
console.log(reverseString("abcd"));
console.log(reverseString("a"));
console.log(reverseString("ab"));
console.log(reverseString(""));
console.log(reverseString());