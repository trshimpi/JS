const User = {
    _email : "t@gmail.com",
    _password: "abc",
    _emailLength: 3,

    get email(){
        return this._email
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password
    },

    set password(value){
        this._password = value
    },

    get lengthOne(){
        return this._emailLength;
    },

    set lengthOne(value){
        this._emailLength = value.length;
    }
}

const tanmay = Object.create(User);
console.log(tanmay.email);  // t@gmail.com
tanmay.email = "tanmay@gmail.com"
console.log(tanmay.email);  //tanmay@gmail.com

console.log(tanmay.lengthOne); //3

tanmay.lengthOne = "Tanmay@gmail.com"

console.log(tanmay.lengthOne); // 16

