const myNumbers = [1 , 2, 3, 4, 5 , 6, 7 , 8, 9, 10]

const newNum = myNumbers.map( (num) => num+10)
//const newNums = myNumbers.map( (num) => { return num+10})
// agr scope open krrhe h to return krna h vrn undefined ajygi value.
console.log(newNum);


//-----
//const newNums = myNumbers
  //              .map( (num) =>num + 10)
    //            .map( (num) => num+1)
      //          .filter((num) => num >= 14)
//console.log(newNums);

//---------------------REDUCE-----------------------------

// reduce is used  toadd value in acc .
const myNums = [1 , 2, 3]

//const myTotal = myNums.reduce( function (acc , currval) {
  // console.log(`acc: ${acc} and currval: ${currval}`);
    //return acc + currval
//} , 0)

const myTotal = myNums.reduce( (acc , currval) => acc + currval , 0)
console.log(myTotal);

//---------------

const shoppingCart = [
    {
        itemName : 'js course' ,
        price: 2999
    },
    {
        itemName : 'py course' ,
        price: 999
    },
    {
        itemName : 'mobile dev  course' ,
        price: 5999
    },
    {
        itemName : 'data science course' ,
        price: 12999
    },
]

const pricePay = shoppingCart.reduce( ( acc ,item) =>  acc +item.price , 0)
console.log(pricePay);
