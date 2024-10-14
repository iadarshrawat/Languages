// question 1
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;
a[45] = 456;

console.log(a[b]); // 456

// question 2
let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key); // new value another value new value


// question 3
const obj = {
    a: "foo",
    b: function () {
      console.log(this.a);
    },
  };
  
  const fun = obj.b;
  
  obj.b(); // foo
  fun(); // undefine

// question 4
// const arr = [0, 1, 2, 3, 4];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(i); // 5 5 5 5 5
//   }, 1000);
// } 

// question 5
let x = 1;

if (function f() {}) {
  x += typeof f;
}

console.log(x);

// question 6
var p = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    p++;
    console.log(p); // 1 2 3 4 5
  }, 1000);
}

// question 7
let l = [1, 2, 3];
let m = [1, 2, 3];
let n = m;

console.log(l == m); // false
console.log(l === m); // false
console.log(n == m); // true
console.log(n == l); // false

// question 8
// Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array.

const func = (arr)=>{
    let sum = 0; 
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            sum += arr[i];
        }
    }
    return sum;
}
let val = func([1,2,3,5,-1,-4]);
console.log(val);

// question 9
// Write a function in JavaScript that takes a string as input and returns a new string with all the vowels removed.
const func2 = (str)=>{
    let newstr = "";
    for(let i=0; i<str.length; i++){
        if(str[i] == 'a' ||str[i] == 'e' ||str[i] == 'i' ||str[i] == 'o' ||str[i] == 'u'){
            continue;
        }
        newstr += str[i];
    }
    return newstr;
}
let val2 = func2("adarshrawat");
console.log(val2)


// question 10
// var xx = 10;
// function foo() {
//   console.log(xx);
//   var xx = 20;
// }
// foo();


console.log(valll);
var valll = 45;
