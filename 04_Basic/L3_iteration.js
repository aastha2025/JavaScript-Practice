// for loop


for(let index = 0 ; index <=5 ; index++){
    const element = index;
    if(element==5){
      //  console.log("5 is best no.");
    }
  //  console.log(element);
}
//console.log(element); // not execute outside the scope.



for(let i = 0 ; i < Array.length; i++){
    for(let j = 0 ; j <=5 ; j++){
      //  console.log(` inner loop value ${j} and inner loop is ${i}`);
        //console.log(i+'*' + j + '=' + i*j); // 1*1=1 table form .
    }
}
//in this outer loop execute 1 and then inner loop end tk chlga fir outer 1 or or inner end tk chlga and so on ..


let myarray = ['flash' , 'batman' , 'superman']
 for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
 }

 //----------------------------------------------------------------------------
// break and continue


for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log(`detected 5`);
        break;//not execute after 5 comes .
    }
    console.log(`value of 1 is ${index}`);
    
}


for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue;//not print 5 and execute next values . .
    }
    console.log(`value of 1 is ${index}`);
    
}

//----------------------------------------------------------------------------------------

/*    while syntax :
initialization;
while(condition){

}(updation);

*/

let index = 0;
while(index <=5){
    console.log(` value of index is ${index}`);
    index+=2;
}
let myArray = ['flash' , 'batman' , 'superman']
let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr+=1;
}
 
//----------------------------------------------------------------

/* do while loop 
 // execute atlest one if condition is wrong also .
initialization;
do{
    
}while(condition);
*/

let score = 1
do{
    console.log(`score is ${score}`);
    score++;
}while(score<=10);


/*let score = 11
do{
    console.log(`score is ${score}`);
    score++;
}while(score<=10);*/

