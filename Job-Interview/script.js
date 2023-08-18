// JavaScript this Keyword

// // 1. the this keyword refers to an object.
// const person = {
//     fName : "Tony",
//     lName : "Stark",
//     id  : 3387 ,
//     fullName : function(){
//         return this.fName+ " " + this.lName
//         // this refers to object person through this keyword fullname can access the properties of person object 
//     }
// }

// console.log(person.fullName());

// Importent point 
// 1. In an object method this refers to the object 
//   Example : 
    const person = {
    fName : "Tony",
    lName : "Stark",
    id  : 3387 ,
    fullName : function(){
        return this.fName+ " " + this.lName
        // this refers to object person through this keyword fullname can access the properties of person object 
    }
}

console.log(person.fullName());

// 2. Alone this refers to the Global object  
//    Example : 
    let x  = this 

// 3. in a function this refers to Global Object
// Example 

const myFunction = () =>{
    console.log(this )
}
myFunction()

// 4. In a function , in strict mode , this is undefined  
"use strict";
function myFunction() {
  return this;
}


// 5.In an event ,this refers to the element that recived the event. 

// 6. Methods like call() ,apply() and bind() can refer this to any object 

// this in a Method : 

// const studentFullname = ()=>{
//     let fName = "Rahul" 
//     let lName = "Soni"
//     function fullName(){ 

//     }  
//     (this.fName + this.lName);
// }
// studentFullname


