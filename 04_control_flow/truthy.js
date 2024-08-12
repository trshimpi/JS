const userEmail = "trshimpi@gmail.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy values 

//false , 0 , -0 , BigInt 0n, "" , null , undefined , NaN 

// truthy values

// true , "0" , 'false' ," " ,[] , {} , function(){}

const arr = [];
if(arr.length === 0){
    console.log("Empty array");
}

const obj = {}
if(Object.keys(obj).length === 0){
    console.log("empty object");
}

// Nullish coalescing operator (??) : null undefined => in case of first value is null or undefined it will assign second value

let val1 ;
// val1  = 5 ?? 10 // 5
// val1  = null ?? 10 // 10
// val1 =  undefined ?? 10 // 10

val1 = null ?? 10 ?? 20 // 10

console.log(val1);

// Terniary operator
const price = 100;
price >= 80 ? console.log("greator than 80") : console.log("less than 80");

