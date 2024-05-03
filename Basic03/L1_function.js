 //defining
function sayMyName(){
console.log("A");
console.log("A");
console.log("S");
console.log("T");
console.log("H");
console.log("A");
}

// reference
//sayMyName()

/*function addTwoNumbers(number1, number2){

        console.log(number1 + number2);
     }*/
    
     //addTwoNumbers(3,4)
     //addTwoNumbers(3 , "a")
     //addTwoNumbers(3 , null)

     function addTwoNumbers(number1, number2){

        // let result = number1 + number2
        // return result
        return number1 + number2
    }
    
      const result = addTwoNumbers(3,5)
      console.log("Result: " , result);

      
      function loginUserMessage(username = "sam"){
        //if(username === undefined)
        if (!username){
            console.log("Please enter a username ");
            return
        }
        return `${username} just logged in`
      }
      //console.log(loginUserMessage("hitesh"));
      //console.log(loginUserMessage());// undefined just loged in
  

function calculateCarPrice(val1, val2, ...num1){ // for n  number of arguments use rest operator (...)

    return num1
}
//console.log(calculateCarPrice(400 , 200 , 300 , 2000));
// provide output [300 , 2000] if use val1 , val2 etc 


const user ={
    username :"Aastha",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)


handleObject({
    username: "sam",
    price :99
});

const myNewArray =[200 , 400 , 100 ,700]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400 , 100 , 2000]));
