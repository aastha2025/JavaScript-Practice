const user ={
    username :"Aastha",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`); // here this refers to the current context.
        console.log(this); // it gives all values present in current context gievs a whole current context of object

        }

}
user.welcomeMessage();
user.username ="sam";
user.welcomeMessage();

console.log(this); // here it gives empty object{} bcz we r in node environment 

// browser ke ander global object hai window
 
function chai(){
    let username = "Aastha"
    console.log(this); // print all information regarding object its prototype vgra subkuch.
    // console.log(this.username); 
    // functions ke andr this keyword use nhi hota
    // this.username give undefined 
}
chai();


//   Methods 2 for  declaring functions using arrow function 

//const chai = function(){
 //   let username = "Aastha"
   // console.log(this.username);
//}
//chai();

//    Method 3

const cha = () =>{
    let username = "Aastha"
    console.log(this.username); //undefined
    console.log(this);
}
cha()

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ARROW FUNCTION++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// syntax :     () => {} arrow function


// hold in variable 

//type 1 of applying {} use return (explicit return)
const addTwo = (num1 , num2) =>{
    return num1+num2
}
console.log(addTwo(3,4));

 //type 2 of applying   not use return (implicit return)
const addTwo1 = (num1 , num2) => num1+num2
const addTwo2 = (num1 , num2) => (num1+num2)

const addnum3 =( num1,num2) => {username: "Aastha"} // undefined not used paranthesis ()
const addnum4 =( num1,num2) => ({username: "Aastha"}) 

