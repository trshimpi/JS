const arr = [0,1,2,3,4,5];
const arr1 = new Array(1,2,3,4);

// console.log(arr);
// console.log(arr1);
// console.log(arr[1]);

/*
array copy like this is shallow copy means , change in any of the array is reflected in other as well.
 it's not new array it's just reference.
 */
const arr2 = arr1;
console.log(arr2);

// arr2.push(5);
// console.log(arr2); //[ 1, 2, 3, 4, 5 ]
// console.log(arr1); //[ 1, 2, 3, 4, 5 ]

// arr.push(6)
// console.log(arr); //[0, 1, 2, 3,4, 5, 6]

// arr.pop() //[0,1,2,3,4,5]
// console.log(arr);

// arr.unshift(9);   // unshift inserts data at the start of array
// console.log(arr); //[0,0, 1, 2, 3,4, 5]

// arr.shift();      // remove first element
// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(9));
// console.log(arr.indexOf(0));

// const arr3 = arr.join(); // join converts array to string 
// console.log(arr3); // 0,1,2,3,4,5
// console.log(typeof arr3); // string

//slice & splice
/*
slice does not include last element whereas splice includes last element
slice does not change original array whereas splice changes original array
*/
console.log("A " , arr);       // A  [ 0, 1, 2, 3, 4, 5 ]
const arr4 = arr.slice(1,3);  
console.log("arr4 " , arr4);   // arr4  [ 1, 2 ]
console.log("B " , arr);       // B  [ 0, 1, 2, 3, 4, 5 ]
const arr5 = arr.splice(1,3);  
console.log("arr5 " , arr5);   // arr5  [ 1, 2, 3 ]
console.log("C " , arr);       // C  [ 0, 4, 5 ]



