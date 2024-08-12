//if 

if(true){
    // run code 
}

if(false){
    // code won't run
}

// const isUserLoggedIn = true;
// if (!isUserLoggedIn){
//     console.log("logged in");  
// }

// if(2 == "2"){
//     console.log("excute");  
// }

// strict checking with type
if(2 === "2"){
    console.log("excute");  
}

// const temperature = 50;
// if(temperature< 50) {
//     console.log("less than 50");
// }else{
//     console.log("not less than 50");
// }

// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`User power :${power}`)
// }

// console.log(`User power :${power}`);  // will throw error : ReferenceError: power is not defined

const balance = 1000;
// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500 ");
// }else if(balance < 750){
//     console.log("less than 750 ");
// }else if(balance < 900){
//     console.log("less than 900 ");
// }else {
//     console.log("less than 1200 ");
// }


const isUserLoggedIn = true;
const debitCard = true;

// && , || , !
if(isUserLoggedIn && debitCard){
    console.log("Allow to buy course");
}
