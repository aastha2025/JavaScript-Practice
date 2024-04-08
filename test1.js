/*const accountId = 12345
let accountEmail = "aastha2000@gmail.com"
var accountPassward = "12349"
accountCity="goa"
let accountState;

accountEmail="ac@gmail.com"
accountPassward="12321"
accountCity="bengaluru"

console.log(accountId);

console.table([accountId , accountEmail,accountPassward,accountCity, accountState])

console.log(typeof null);*/

////// conversion operators////
/*let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueofno = Number(score)
console.log(typeof valueofno);
console.log(valueofno);

let islogedin = 1;
let boolislogedin = Boolean(islogedin)
console.log(boolislogedin);

let someno = 33
let stringno = String(someno)
console.log(stringno);
console.log(typeof stringno);

console.log(1+"2");
console.log("1"+2);
console.log("1"+2+2);
console.log(1+2+"2");

console.log(true);
console.log(+true);
console.log(true+);
console.log(+"");
let gameCounter =100
++gameCounter;
gameCounter++;
console.log(gameCounter);

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined >=0);
console.log( undefined<0);

console.log("2"===2);

const score =100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)

//const bigNumber = 12334566789644n
const heros =["shaktiman", "nagraj","dogro"];
let myobj= {
    name :"hitesh",
    age: 22,
}
const  myfunction = function(){
    console.log("hello world");
}
console.log(typeof heros);

//stack (primittive)  heap ( non primitive)

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


const name ="hitesh"
const repocount =50
// not good type of form console.log( name + repocount +"value");
console.log(`hello my name is ${ name} and my repo count is ${ repocount}`);

const gamename = new String ("hiteshhc")
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const gamename =new String("hitesh-hc")

const newString =gamename.substring(0,4)
console.log(newString);

const anotherString =gamename.slice(-8,2)
console.log(anotherString);

const newStringone ="     hitesh     "
console.log(newStringone);
console.log(newStringone.trim());// trim is used to remove or neglect the space 

const url = "https://htesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));
console.log(url.includes('sunder'));

console.log(gamename.split('-'));

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
// here tostring use to convert 100 into string so can use many formats of string like length include etc.
const otherNumber=123.8966
console.log(otherNumber.toPrecision(4));
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(4,3,6,8));
console.log(Math.min(4,3,6,8));

console.log(Math.random());// math.random value always lies b/w  0-1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1))+min);


let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

//let mycreatedDate = new Date(2025,1,19)
//let mycreatedDate = new Date(2025,1,19,5,5)
let mycreatedDate = new Date("01-14-2024")

//console.log(mycreatedDate.toLocaleString());
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());*/

//+++++++++++++ARRAY++++++++++++++++
/*const myArr = [0,1,2,3,4,5]
//const myheros = ["shaktiman", "nagraj"] 

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9));

console.log(myArr.indexOf(90));

const newArr = myArr.join()
console.log(newArr);

console.log(myArr);

// slice , splice 
const myArr = [0,1,2,3,4,5]
const myn1 =myArr.slice(1,3)
console.log("A ", myArr);

console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1,3);

console.log(myn2);
console.log("C " , myArr);

const marvel_heros = ["ironman" , "spiderman" , "thor"]
const dc_heros = ["superman" , "flash" , "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const all_new_heros = [...marvel_heros ,...dc_heros]
console.log(all_new_heros);*

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"})) // interesting case

let score1=100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));*/

console.log(typeof NaN);

console.log(`here i learn how to commit`);