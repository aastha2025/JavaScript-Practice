// for of 

// ["" , "" , ""]
// [{} , {} , {}]
const arr = [1 , 2 , 3 ,4 ,5]
//for(const iertator of object)
for(const num of arr){
    console.log(num);
}

//--------------------------

const greeting = "hello"
for (const  greet of greeting){
    console.log(`each char is ${greet}`)
}

//Maps  

// map object holds key values pairs and remembers the original insertion order of keys .. no duplicate value only unique present.

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United State of America")
map.set('Fr' , "France")

//console.log(map);
//for(const key of map) // this print value in array form
 for(const [key , value] of map){
    console.log(key  , '-:', value); // saperate key and value
}

/*const myObject = { // not iteratable in object  
    'game1' : 'NFS',
    'game2': "Spiderman"
}
for(const [key , value] of myObject){
    console.log(key , ':-' , value);
}*/


// here forin loop is used for iterarting values and keys in object 
// for in ---------------------------------

const myObject = {
    js :'javascript',
    cpp : 'c++',
    rb : 'ruby' , 
    swift : 'swift by apple'
}
for (const key in myObject) {
    console.log(key); // key dega ye
    console.log(myObject[key]); // value dega ye
    console.log(`${key} sortcut is for ${myObject[key]}`);
}

//------------------

const programming = ["js" , "rb" , "py" , "java" , "cpp"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}
// array keys from 0 to n so on by default.

//----------------------------

const map1 = new Map()
map.set('IN' , "India")
map.set('USA' , "United State of America")
map.set('Fr' , "France")
for (const key in map1){
    console.log(key);
}// map ke uper for in use krke iteration nhi krskte h.


// for object use for in loop
//for array use for of loop , for each loop


// forEach ---------------------------------------------------------------------------


const coding = ["js" , "rb" , "py" , "java" , "cpp"]
//coding.forEach( function (val) {
    // foreach is callback function ismai function name nhi likhte h 
  //  console.log(val);

//})

coding.forEach( (item) => {
    console.log(item);
})

//--------------------------------

function printMe(item){
    console.log(item);
}

coding.forEach(printMe); // here we r giving reference.
//---------------------------------

coding.forEach( (item , index , arr) => {
    console.log(item , index , arr);
})

//----------------------------------------

const myCoding = [
    {
        languageName : "javascript" ,
        languageFileName : "js"
    },
    {
        languageName : "java" ,
        languageFileName : "java"
    },
    {
        languageName : "python" ,
        languageFileName : "py"
    },

] // here we use [{} , {}, {}] one array [] jismai {} 3 object h present.

myCoding.forEach( (item)=> {
    console.log(item.languageName);
})