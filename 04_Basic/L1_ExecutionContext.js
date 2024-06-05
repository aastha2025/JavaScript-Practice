// JAVASCRIPT   EXECUTION CONTEXT
/* 
javascript run program in 2 phase 

----> {} global execution (or global environment) context ... allocate in this 
js is single threaded language.
---> Function Execution Context...
// in mongo eval execution context also present.
 
1 phase --> Memory Creation Phase  ( memory allocation hoti h {})

2 phase --> Execution Phase

*/

let val1 = 10 
let val2 = 5
function addNum(num1 , num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1 , val2)
let result2 = addNum(10,2)
/*

step 1 :  global execution in this
step 2 : memory phase  (sub undefined declare honge variables)
--> val1  , val2 , result1 , result2 = undefined and addnum = defination 
 functions ko defination se or variable ko undefined se represent krnge ismai 

 step 3 : execution phase 
 val1 = 10 , val2 = 5 then addNum ke liye alg box bnega ab  same process new variable environment + execution phase 
  result1 = 15 , result2 = 12
  nested memory box execution ke baad delete bhi hojate h .

  then with addNum  create new mwmory phase val1 ,val2 , total = undefined 
  the execution phase  num1 = 10 , num2 = 5 total = 15
  ab ye total return hoga global execution ko . 
 
   ab result2  mai addNum ke liye new memory + thread bnega same memory and execution process 
   */

   //-----------------> CALL STACK <--------------

   //LIFO technique is used for functions same as stack 
   // at first global execution hoga define then function call push pop acc to LIFO ..