let isPalindrome = (word) => {
    if( (word.length === 0 ) || (word.length === 1) ){
        return true;
    }

    if(word.charAt(0) === word.charAt(word.length - 1)){
        return isPalindrome(word.substring(1, word.length-1))
    }

    return false;
}

let firstLang = "malayalam";
let secondLang = "hindi";


console.log(`Is ${firstLang} palindrome? ${isPalindrome(firstLang)}`);
console.log(`Is ${secondLang} palindrome? ${isPalindrome(secondLang)}`);