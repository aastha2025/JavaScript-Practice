const name ="hitesh"
const repocount =50
// not good type of form console.log( name + repocount +"value");
console.log(`hello my name is ${ name} and my repo count is ${ repocount}`);


const gamename = new String ("hiteshhc")
// console.log(gameName)
// Here String gameName is a object
//console.log(gamename[0]);
// console.log(typeof(gameName))
// console.log(gameName[2])

/* -----------> Access diferent prototypes <------------- */
 
//console.log(gamename.__proto__);

//console.log(gamename.length);
//console.log(gamename.toUpperCase());
//console.log(gamename.charAt(2));
//console.log(gamename.indexOf('t'));


/* ---------------> substring or slicing in javaScript <---------------- */

const gamename =new String("hitesh-hc")

const newString =gamename.substring(0,4)
console.log(newString);

// we can also use negative values with slicing 
const anotherString =gamename.slice(-8,2)
console.log(anotherString);


/* -------------> Trime and Replace <--------------- */

const newStringone ="     hitesh     "
console.log(newStringone);
console.log(newStringone.trim());// trim is used to remove or neglect the space 

const url = "https://htesh.com/hitesh%20chaudhary"
console.log(url);
console.log(url.replace('%20','-'));

// string is the most powerful datatype of any language

console.log(url.includes('hitesh'));
console.log(url.includes('sunder'));

console.log(gamename.split('-'));
