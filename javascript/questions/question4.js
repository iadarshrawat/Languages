// fibonacci sequence generator

function fibonacci(num){
    if(num<=1) return num;
    return fibonacci(num-1)+fibonacci(num-2);
}

function fibonacci2(num){
    let first = 0;
    let second = 1;
    for(let i=0; i<num-1; i++){
        let third = first+second;
        first = second;
        second = third;
    }
    return second;
}

let ans = fibonacci(5);
console.log(ans);

let ans2 = fibonacci2(5);
console.log(ans2);