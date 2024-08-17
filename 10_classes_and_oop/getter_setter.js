class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email;
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return this._password;
    }

    set password(value){
        this._password = value;
    }

}

const tanmay = new User("tanmay@gmail.com","123");
console.log(tanmay);  // User { _email: 'tanmay@gmail.com', _password: '123' }

console.log(tanmay.email);  //tanmay@gmail.com 

console.log(tanmay.email === tanmay._email);  // true;
