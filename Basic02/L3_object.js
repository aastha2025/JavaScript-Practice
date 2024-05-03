/* Object ko declare kne ke 2 tareeke hote hai 

1. Literal and 2. constructor

 Never a singleton: when object is created by literal.

singleton: when object is created by constructor it refers as Singleton.
 Object.create is one of the constructor method for crating an object.

*/


//OBJECT LITERALS

//const jsUser ={} //empty object

const mySym = Symbol("key1")
 const user ={
    name : "Aastha", 
    "full name" : "Aastha Singh",
    [mySym]: "myKey1", // it won't be a symbol if it is not surrounded by sqaure brackets[]
    age: 18,
    location :"Ghaziabad",
    email : "aastha@gmail.com",
    isloggedIn : true,
    lastSeen : ["Monday" , "Wednesday"],

 }
 // 2 type of declaration one by dot  . and one by []  .
 console.log(user.email);
 console.log(user["email"]);
 console.log(user["full name"]); // this cannot be accssed by dot 
 console.log(user[mySym]); // access symbol datatype
 
 console.log(typeof user[mySym ]); //string
 console.log(typeof user.mySym); //undefined
 
 user.email ="singh@gmail.com"
 Object.freeze(user)
 user.email ="singh12@gmail.com"
 console.log(user);
 


// console.log(Object.isSealed(user));
// console.log(Object.isFrozen(user));
// Object.freeze(user);
// after freezing the object no data of object can be updated
// console.log(Object.isSealed(user));
// console.log(Object.isFrozen(user));

user.greeting = function(){
    console.log("Hello Coder");
}

user.greetingTwo = function(){
    console.log(`Hello user , ${this.name}`);
}

console.log(user.greetingTwo());
console.log(user.greeting());
