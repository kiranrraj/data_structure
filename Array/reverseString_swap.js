function reverseString(str) {

    if(str === undefined || str === null) return "";

    let len = str.length;
    let mid = Math.floor(len /2);

    if(len < 2) return str;

    str = str.split("");

    for(let x= 0, y= len-1; x < mid, y >= mid; x++, y--){
        if(!(x >= y)){
            [str[x], str[y]] = [str[y], str[x]];
        }
    }
    return str.join("");
}

console.log(reverseString("kiran raj r"));
console.log(reverseString("abcd"));
console.log(reverseString("a"));
console.log(reverseString("ab"));
console.log(reverseString(""));
console.log(reverseString());