///---------------------------  filter map and reduce -----------------------------------

const coding = ["js" , "rb" , "py" , "java" , "cpp"]
 
const values = coding.forEach((item)=>{
//   console.log(item);
      return item; // for each dont return any thing it is undefined.
 })
 console.log(values); 
// filter ---------------------------------------------------

 const myNums = [1 , 2, 3 , 4 ,5 ,6 ,7 ,8 , 9, 10]
  

 //let newNums =myNums.filter((num)=>
 // return num > 4 
   // num > 4
 //}) ismai return [] empty array hoga kyuki scope lgadiya {} to values nhi hongi return. u have to use return keyword for retuning value in {} scope

 let newNums =myNums.filter((num)=>  num > 4)
 
 console.log(newNums)
// filter return krta h  values . callback function mai value di jygi or conditition jo jo condition satisfy krnge true hogi vo return hojygi.

//---------------------------------------------------------------

const myNum = [1 , 2, 3 , 4 ,5 ,6 ,7 ,8 , 9, 10]
const newNum = []
myNum.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)
    }
})
console.log(newNum);


//-------------------------------------------------------------------------------------------------
const books = [
    {title: 'book one'  , genre : 'fiction' , publish : 1981 , edition: 2004},
    {title: 'book two' , genre :  ' non -fiction' , publish : 1982 , edition: 2008},
    {title: 'book three' , genre : 'history' , publish : 1999 , edition: 2007},
    {title: 'book four' , genre : ' non -fiction' , publish : 1989 , edition: 2010},
    {title: 'book five' , genre : 'science' , publish : 2009 , edition: 2014},
    {title: 'book six' , genre : 'fiction' , publish : 1987 , edition: 2010},
    {title: 'book seven' , genre : 'history' , publish : 1986 , edition: 1996},
    {title: 'book eight' , genre : 'science' , publish : 2011 , edition: 2016},
    {title: 'book nine' , genre : ' non -fiction' , publish : 1981 , edition: 1989},

];

let userBooks = books.filter( (bk) => bk.genre ==='History')

userBooks = books.filter((bk) => { 
    return bk.publish >= 1995 && bk.genre==='history'
})
console.log(userBooks);
