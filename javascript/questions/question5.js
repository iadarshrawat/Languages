// character frequency counter
function characterFrequency(str){
    let map = {};

    for(let i=0; i<str.length; i++){
        if(map[str[i]]){
            map[str[i]]++;
        }
        else{
            map[str[i]] = 1;
        }
    }

    return map;
}

let ans = characterFrequency("Adarsh rawat");
console.log(ans);