// ------------------------> CONTROL FLOW <---------------------
 //login h to login ka code hi run ho logout h to logout ka hi run h work on condition base.

 // ------------> if condition <------------

 /*
  if(true){
code will execute  in this scope .
  }

  if(false){
    code will not execute in this scope.
  }
  */

  const isUserloggedIn = true
  const temperature = 41
 //if(temperature <50){
   if(temperature ===41){
 console.log("less than 50");
 }
 else{
 console.log("temperature is greater than 50");
 }

  //if(2=="2"){
    //console.log("executed");
  //}
  // < , > , <= , >= , == , != , ===(check string type) ,!==(check negative side)
  

  const  score = 200
  if(score >100){
    const power ="fly"
    console.log(`user power : ${power}`);
  }
  console.log(`user power : ${power}`); // error power is  out of scope .

//  method 2 : implicite scope one line execution

const money = 1000
//if(money >500) console.log("test"); // do not recomment immature code.


 //----------------> NESTED <-----------------

 if(money < 500){
    console.log("less than 500");
 }
 else if (money <750){
    console.log("less than 750");
}
else if ( money <900){
    console.log("less than 900");
}
else{
    console.log(" less than 1200");
}

//-------------------------->   MULTIPLE CONDITIONS<-------------------------

const isUserloggedIn1 = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(isUserloggedIn1 && debitCard){
    console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}

// -------------------> SWITCH CASE <--------------


/* syntax 

switch(key){
     case value:

     break;

     default:
        break;
}*/

const month = 3 // 3 to case will be also numbers  if ther is string then case value also be in "string".
switch(month){ 
    case 1:
        console.log("January");
        break;

        case 2:
        console.log("February");
        break;

        case 3:
            console.log("March");
            break;

            default :
            console.log("default case match");
            break;
}
// if not use break then check and match all cases except default case.


///////--------------> Truthy and falsy values <----------

const userEmail = "aastha@gmail.com" // print if statement
//const userEmail= "" // print else statement
//const userEmail = [] // print if statement
if(userEmail){
    console.log("got mail");
}
else{
    console.log("don't have mail");
}

/* 
 falsy values 
 . false , 0 , -0 ,BigInt , 0n , "" , null , undefined , NaN

 truthy values
 . "0" (0 in string), 'false' (in string) , "" , [] , {} (empty object) , function(){} (empty function)
 rest falsy values all are truthy values .
 */

 if(userEmail.length === 0){
    console.log("array is empty");
 }
 const empObj = {}
 if(Object.keys(empObj).length){
    console.log("object is empty");
 }
 /* false == 0  provide true , false =='' provide true , 0 == ' ' provide true  */

 // --------------> NULLISH COALESCING OPERATOR (??) : numm , undefined <---------------------

 // use this method kyuki kyi baar more than one values mil jati h .
 let val1;
 //val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 //( jo bhi 1 value assign hogi vo ajygi like 10 in this)
 console.log(val1);

 // --------------> TERNIARY OPERATOR <--------------
 //condition ? true : false

 const iceTeaPrice =100
 iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")