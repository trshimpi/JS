// let score = "Tanmay"
// let score = null
// let score = undefined
let score = true;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
// console.log(valueInNumber);

// variable  => type       => Number() conversion
// "33"      => string     => 33
// "33abc"   => string     =>  NaN
//  true     => boolean    =>  1; 
// false     => boolean    =>  0;
// null      => object     => 0
// undefined => undefined  => NaN

// let isLoggedIn = "Tanmay"
// let isLoggedIn = null
let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(isLoggedIn);
// console.log(booleanIsLoggedIn);

// variable     => Boolean() conversion
// 1            => true; 
// 0            => false
// ""           => false
// "hitesh"     => true
// null         => false
// undefined    => false


// let someNumber = 33
let someNumber = undefined

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// variable        => String() conversion type  => conversion value
// null            => string                    => null
// undefined       => string                    => undefined



// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Tanmay"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
