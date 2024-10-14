function reverseString1(str){
    let ans = "";
    for(let i=str.length-1; i>=0; i--){
        ans += str[i];
    }
    console.log(ans);
}

function reverseString2(str){
    let ans = "";
    ans = str.split('').reverse().join("");
    console.log(ans);
}

reverseString1("Adarsh rawat")
reverseString2("Adarsh rawat")
