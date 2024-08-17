console.log(Math.PI)
Math.PI = 4;
console.log(Math.PI)

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
is writable is false hence you can't change the value of PI , you can do this for other objects that you create
*/

const user ={
    username:"Tanmay",
    email:"trshimpi@gmail.com",
    pass: 123
}

console.log(Object.getOwnPropertyDescriptor(user,"username"));


Object.defineProperty(user , "username" ,{
    writable: false,
    enumerable: false,
  })

user.username = "Sahil"  // won't set the username as writable is false

console.log(user);  // { email: 'trshimpi@gmail.com', pass: 123 } as enumerable is false hence only email and pass is printed

for (let [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}