let reverseString = (character) =>{
    if(character === ""){
        return "";
    }
    console.log(character);
    return(reverseString(character.substring(1)) + character.charAt(0));
}

console.log(reverseString("hello"));