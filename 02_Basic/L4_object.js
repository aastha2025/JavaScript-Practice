  // singleton OBJECT;
//const tinderUser = new Object()
const tinderUser ={}

tinderUser.id ="12abc"
tinderUser.name ="Aastha"
tinderUser.isLoggedIn = false
 //console.log(tinderUser);


//objects can be nested 

 const regularUser = {
    email : "aastha@gmail.com",
    fullname :{
        userfullname : {
            firstname:"Aastha",
            lastname:"Singh"
        }
    }
 }
//access nested object values

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}


// merging of objects 
 //const obj3 = Object.assign({} ,obj1 , obj2);  // {} is used to store the values of merged objects as assign will return the new object  
 // not really used ..
//const obj3 = {obj1 , obj2} not good practice
//console.log(obj3);

const obj3 = { ...obj1, ...obj2}
console.log(obj3);


//object in a variable

const user =[
    {
         id : 1,
        email : "1st"
    },
    {
        id : 1,
        email : "2nd"
    },
    {
        id : 1,
        email : "3rd"
    },
    {
        id : 1,
        email : "4th"
    },

]
console.log(user[1].email);

//prototypes

console.log(Object.keys(tinderUser)); //return all keys
console.log(Object.values(tinderUser)); // return all values
console.log(Object.entries(tinderUser)); // return all keys and values

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor; // have to write this code to access same value again n again
// destructuring of an object 

// const {courseInstructor} = course; // good we can also give another name 
const {courseInstructor: teacher} = course; 
console.log(teacher);


// {} destructing krta hai 



// how we get data from APIs
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }



/* ----> array form APIs  <---- */
[
    {},
    {},
    {}
]