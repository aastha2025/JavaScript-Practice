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

//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.6));
//console.log(Math.ceil(4.2));
//console.log(Math.floor(4.9));
//console.log(Math.max(4,3,6,8));
//console.log(Math.min(4,3,6,8));


/* -----------> random value in javaScript <------------ */

console.log(Math.random());// math.random value always lies b/w  0-1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1))+min);

// ab mujhe random value chahiy or minimum random value 10 honi chaihy isme kamm nhi 
// or value ki range min se max ke beech me random number do
// whereas max-min gives us random numebr
