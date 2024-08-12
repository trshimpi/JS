// to refer to current context we use this keyword
const user = {
    userName : "Tanmay",
    price: 999,
    welcomeMessage : function(){
        console.log(this);   
        
        console.log(`${this.userName} , welcome to website`);
    }
}

user.welcomeMessage();
user.userName = "Sam"; 
user.welcomeMessage(); 
/* this will print following 
        {
            userName: 'Sam',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }
        Sam , welcome to website
*/
 
console.log(this);  // {}   => in browser global context is "Window" but here it is empty object "{}"

// function one(){
//     let userName ="Tanmay";
//     console.log(this.userName);  // undefined 
// }

// const one = function(){
//     let userName ="Tanmay";
//     console.log(this.userName);  // undefined 
// }

const one = ()=> {
    let userName ="Tanmay";
    console.log(this)  // {}
    console.log(this.userName);     // undefined
}

one();  

// arrow function normal
const addTwo = (num1, num2) => {
    return num1+num2;
}

console.log(addTwo(3,4)); //7

// arrow function implicit return => we don't need to return and use curly brackets , just use paranthesis.
const add = (num1, num2) => (num1 + num2)  // no need to use return statement
console.log(add(5,6));  //11








