
/*
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

1.The first is the anonymous function with lexical scope enclosed within the grouping operator ().
 This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2.The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
*/



//iife => immediately invoked function expressions => we use it to prevent pollution from global scope variables
(function () {
    // …
})();
  
(() => {
    // …
})();
  
(async () => {
    // …
})();

(function one(){
    console.log("DB connected");
})();  // to run two iifey one after another always use ; to end the scope of first iife


( (name) => {
    console.log(`DB connected again , ${name}`);
})("Tanmay")


