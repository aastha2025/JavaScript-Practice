// Immediately Invoked Function Expressions (IIFE)
 


(function chai(){

    //named IIFE
    console.log(`DB CONNECTED`)
 })(); // here  first () for function defination the second () for fun. execution.
 //chai() 

//global scope se problem hoti h kayi baar usko htane ke liye iife ka use kiya ()()

((name) => {
    console.log(`name is a${name}`);
})("Aastha");



const user={
    name : "Aastha",
    age: 20
};
((user) =>{
    console.log(`My name is ${user.name} and my age is ${user.age}`);
})(user);