//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


const score =100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)

//const bigNumber = 12334566789644n

// Reference (Non primitive)

// Array, Objects, Functions

const heros =["shaktiman", "nagraj","dogro"];
let myobj= {
    name :"hitesh",
    age: 22,
}
const  myfunction = function(){
    console.log("hello world");
}
console.log(typeof heros);

/*
        typeof( )      |      result 

        undefined      |      undefined
        null           |      Object
        Number         |      number
        String         |      string
        Boolean        |      Boolean

*/

// Memory in javaScript

// 2 types of memory
//stack (primittive)  heap ( non primitive)

/*
1. stack

isme copy milti hai so agr koi change hua copy me to wo effect nhi krega main variable koi

example:
let a = 5;
let b = a;
both a and b has same value but different memory 

2. heap 
it refer to the same memory location with different objects/variables in stack*/

let myutubename = "hitesh"
let anothername = myutubename
anothername="chaicode"

console.log(anothername);

let userone={
    email: "aastha@gmail.com",
    upi:"aastha@jbl",
}

let usertwo = userone

usertwo.email="aryan@gmail.com"

console.log(usertwo.email);
console.log(userone.email);