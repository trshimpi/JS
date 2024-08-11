const arr = [0,1,2,3,4,5]

console.log("lenght :" , arr.length);

const marvel_heros = ["ironman" , "thor" , "spiderman"];
const dc_heros = ["superman" ,"flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);  // [ 'ironman', 'thor', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);  // [ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]

// const arr1 = [...marvel_heros , ...dc_heros]
// console.log(arr1); // [ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[8,9,10]]];
/*
 flattens the embedded array to depth given in flat function bydefault it flattens to depth 1
 */
const usable_Array = another_array.flat(2);  
// console.log(usable_Array); // [1,  2, 3, 4, 5, 6,  7, 6, 7, 8, 9, 10]

console.log(Array.isArray("Tanmay"));  // false
console.log(Array.from("Tanmay"));     // [ 'T', 'a', 'n', 'm', 'a', 'y' ]
console.log(Array.from({name:"Tanmay"})); // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // [100,200,300]



