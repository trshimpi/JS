function User(email,password){
    this._email = email;
    this._password = password

    Object.defineProperty(this ,'email', {
        get: function(){ return this._email},
        set: function(value){ this._email = value}
    })

    Object.defineProperty(this ,'password', {
        get: function(){ return this._password},
        set: function(value){ this._password = value}
    })
}

const tanmay = new User("tanmay@gmail.com" , "123");

console.log(tanmay); //User { _email: 'tanmay@gmail.com', _password: '123' }
console.log(tanmay.email);  //tanmay@gmail.com

