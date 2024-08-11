//singleton
//Object.create()

//object literal
const mysym = Symbol("key1");
const obj = {
    name:"Tanmay",
    email:"tanmay@gmail.com",
    [mysym]:"mykey1",  // symbols are always used in brackets
    age: 25,
    location:"pune",
    isLoggedIn: true,
    "last Name":"shimpi"
}

// console.log(obj["name"]);
// console.log(obj.email);
// console.log(obj["last Name"]);
// console.log(obj[mysym]);    // symbol are always accessed with square brackets


obj.email = "trshimpi@gmail.com"

// console.log(obj);
// Object.freeze(obj);   // you can't change value of objects after freeze;
// obj.name = "trs"
// console.log(obj);

obj.greeting = function(){
    console.log("Hello world!");
}

obj.greetingTwo = function(){
    console.log(`Hello ${this.name}!!`);
}

console.log(obj.greeting());
console.log(obj.greetingTwo());



