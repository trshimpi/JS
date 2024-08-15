/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
*/

const promiseOne = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        console.log("hi")
        resolve();
    }, 1000)
})

// promiseOne.then(()=>console.log("promise executes")).catch(()=> console.log("error"))

const promiseTwo = new Promise((resolve, reject)=> {
    // do an async task
    // DB calls , cryptography , network related tasks
    setTimeout(()=>{
        console.log("Hi two");
        resolve({user:"Tanmay" , email:"trshimpi@gmail.com"});
    },1000)
})

promiseTwo.then((data)=>console.log(data)).catch(()=>console.log("error"));

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = true;
        if(!error){
            resolve({user:"Tanmay",email:"trshimpi@gmail.com"});
        }else{
            reject("error occured");
        }
    },1000)
})

promiseThree.then((data)=>{
    console.log("resolved with data: " , data);
}).catch((e)=>{
    console.log("Error : " , e);  
})


const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = false;
        if(!error){
            resolve({user:"Tanmay",email:"trshimpi@gmail.com"});
        }else{
            reject("error occured");
        }
    },1000)
})

// promiseFour
//     .then((data)=> data.user)
//     .then((user)=> console.log("user : ", user))
//     .catch((error)=> console.log(error));

promiseFour
    .then((data)=> {return data.user})
    .then((user)=> console.log("user : ", user))
    .catch((error)=> console.log(error));

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = true;
        if(!error){
            resolve({user:"Tanmay",pass:"trshimpi@gmail.com"});
        }else{
            reject("error occured");
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const res = await promiseFive;
        console.log(res);
    } catch (error) {
        console.log(error);
    }    
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
         const users = await res.json();
        console.log(users);
    } catch (error) {
        console.log(error);
    }
    
}

// getAllUsers()

// same fetch using .then & .catch
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> {return res.json()})
    .then((users)=>console.log(users))
    .catch((error)=>{console.log(error)})