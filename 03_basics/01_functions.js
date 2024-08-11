// console.log("T");


function sayMyName() {
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("M");
    console.log("A");
    console.log("Y");
}

// sayMyName()

function add(num1, num2){  // function definition => params
    return num1+ num2;
}

console.log(add(2,3));  // function call => arguments

const result = add(4,5);
console.log(result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter username");
        return;
    }
    return `${username} just logged In!`;
}

// console.log(loginUserMessage("tanmay"));  //Tanmay just logged In!
// console.log(loginUserMessage());  //sam just logged In!

// function calculateCartPrice(...num1){ // rest operator
//     return num1;
// }

// console.log(calculateCartPrice(2,3,4));  // [2,3,4]

function calculateCartPrice(val1, val2 ,...num1){ // rest operator
    return num1;
}

console.log(calculateCartPrice(200,300,400,500)); // [400,500]

const user = {
    username:"Tanmay",
    price: 199
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} & price is ${anyObj.price}`)
}

handleObject(user);

function handleArray(arr){
     return (arr[2])
}

console.log(handleArray([1,2,3,4]));

