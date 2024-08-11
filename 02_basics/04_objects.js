// const obj = new Object({name:"tanmay"});

// console.log(obj);

const user = {}
user.id ="abc";
user.name = "Tanmay";
user.isLoggedIn = true;

const regularUser= {
    email : "Trshimpi@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Tanmay",
            lastName : "Shimpi"
        }
    }
}

console.log(regularUser.fullName?.userFullName?.firstName);

const obj1 = { 1:"a" , 2:"b"}
const obj2 = {3 :"a" , 4 :"b"}

// const obj3 = Object.assign({},obj1 , obj2);  // to merge two objects (keys in same level)
// const obj3 = {...obj1 , ...obj2};
// console.log(obj3);

// merging objects with same properties
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

// deep clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }


// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));

// console.log(regularUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName : "Js",
    price : "999",
    courseInstructor : "tanmay shimpi"
}

const {courseInstructor: instructor} = course ;
console.log(instructor);





