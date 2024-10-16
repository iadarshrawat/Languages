// find the prime number

function primeNumber(num){
    if(num==2){
        console.log("this is a prime number");
        return;
    }
    let flag = true;
    for(let i=2; i<num-1; i++){
        if(num%i==0){
            console.log("Not a prime number");
            flag = false;
            break;
        }
    }
    if(flag)console.log("this is a prime number");
}

primeNumber(2);
