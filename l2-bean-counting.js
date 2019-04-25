function countBs(String){
    let uppercaseB = 0;
    for( var i in String){
       if (String[i] === "B"){
        ++uppercaseB;
       }
    }
    return uppercaseB;
} 

function countChar(String, letter){
    let uppercaseLetter = 0;
    for( var i in String){
       if (String[i] === letter){
        ++uppercaseLetter;
       }
    }
    return uppercaseLetter;
} 

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

