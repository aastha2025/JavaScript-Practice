//var c=300


let a=300

if(true){
let a = 10
const b =20
//var c =30

console.log("INNER: " , a);  //local scope can acceess only in {} range.

}
console.log(a); // global scope can access in all code.
//console.log(b);
//console.log(c);
// var has no scope
// jitni baar {} ayga utni baar scope ayga .


function one(){
    const username ="Aastha"

    function two(){
        const website = "Portfolio"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username = "Aastha"
    if(username==="Aastha"){
        const website = "Portfolio"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


// ++++++++++++++++++ interesting  concept  (example)++++++++++++++++++

//console.log(addone(5)); output is 6  no error
 //or 
addone(5)
function addone(num){
    return num +1
}



 console.log(addTwo(5)) // error  ++ => access before declaration beacase hosting function in a variable.
 
const addTwo = function(num){ //expression

     return num +2
}

/*

        nested scope 
        child function parent function ke variables ko access kr pata hai easily

*/