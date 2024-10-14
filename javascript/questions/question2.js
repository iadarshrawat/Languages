// palindrom checker

function checkPalindrom(str){
    let str2 = str.split("").reverse().join("");

    if(str==str2) console.log("Yes this is palindrom")
    else console.log("Not a palindrom")
}

checkPalindrom("adarsh")
checkPalindrom("haah")