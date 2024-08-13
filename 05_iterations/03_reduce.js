const myNums = [1,2,3,4,5,6];

const nums = myNums.reduce((acc, val)=> acc+ val , 0);

console.log(nums)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((total , item) => total+item.price , 0);
console.log(totalPrice);
