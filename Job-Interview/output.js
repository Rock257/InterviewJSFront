//1.  function  sayHi(){
//     console.log(name);
//     console.log(age);
//     var name = "Hello" ;
//     let age = 32 ;
// }

// sayHi();

//Output : 
// undefined and referance error ( Cannot access 'age' before initialization)


// 2.WHAT IS OUTPUT 

for(var i = 0 ; i<3; i++){
    setTimeout(()=>console.log(i),1);
}

// Output is : 3,3,3 
//  Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.


for(let i = 0 ; i<3; i++){
    setTimeout(()=>console.log(i),1);
}

// Output is : 0,1,2 
// In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.

// 3. What's the output?

const shape = {
    radius : 10,
    diameter(){
        return this.radius*2
    },
    perimeter :()=>2*Math.PI*this.radius

};
console.log(shape.diameter())
console.log(shape.perimeter())

// Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.

// with arrow function this keyword refers to its current

// which one is true  


const bird = {
    size : "small" ,
}

const mouse = {
    name : "Mickey",
    small : "true",
}
console.log("Hello Miss Bashir")

// A console.log(mouse.bird.size)  is not valid 

console.log(mouse[bird.size])  //is not valid 
console.log(mouse[bird["size"]]) //is not valid 
//  all of them are valid  

// Outout :  a statement is false 

// Answer :- In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement.

let c  = { 
    greeting :" Hey !"
}

let d ;
d = c;

c.greeting ="Hello"
console.log(d.greeting)

// Outout  : "Hello "
// When you change one object, you change all of them. but we we  log c.greeting = "hello " after the d.greeting we got in output is Hey !

// 7.  Wht is output 

let a = 3 ;
let b  = new Number(3) 
let f  = 3 ; 

console.log("output: 7")

console.log(a==b) ;  //true
console.log(a===b);  // false
console.log(a===f);  // true 

// new Number() is a built-in function constructor. , when we use  "==" its only check the same value  , and "===" is used (Strict equality operator) then it check not only the value but also the type of should be same  
// as in above type is not same  new number() is not a number its an object 



// 9. wht is output 

let greetings; 
greetign = {} ; // Typo !

console.log(greetign) ;
 
 // Outout : {}
 
//  it logs the object 

// 10  what happen when we do this 

function bark(){
    console.log("Woof !");
}
bark.animal = "dog";

// nothing will happen as the  no  error we seen 
// This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.

//11. wht is output ? 

function Person(fName , lName){
    this.fName = fName ;
    this.lName = lName;
}

// const member = new Person("Rahul" , "Soni")

// Person.getFullName = function(){
//     return `${this.fName} ${lName}` ;
// }

// console.log(member.getFullName())

// Output : Typeerror 

// n JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError

//12.  what the output  

function Persons(fName ,lName){
    this.fName = fName;
    this.lName = lName;
    // return getFullName = fName +" "+ lName
}

const soliha = new Persons("Soliha" , "Bashir");
const radhika = Persons("Radhika" , "Sharma");

console.log(soliha) ;  // Persons {fName: 'Soliha', lName: 'Bashir'}
console.log(radhika);  // undefined  
// For radhika, we didn't use the new keyword. When using new, this refers to the new empty object we create. However, if you don't add new, this refers to the global object!
// radhika itself is left undefined, since we don't return a value from the Person function.

// 13.  what are the phases of event propagation ? 

// there are three(3) phases or event propaation 
// Capturing > Target > Bubbling 

// 14. All object have prototypes.
// A: true
// B: false
 
// Outlook  
// All objects have prototypes, except for the base object ,The base object is the object created by the user, or an object that is created using the new keyword.


// 15. What's the output?  

function sum(a,b){
    return a+b ;
}
console.log("hey Baby")

console.log(sum(4,"7"))  // 47

console.log(sum(3,6))   //  9

// JavaScript is a dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.

// 16. What's the output? 

let number = 0 ; 
console.log("Let see Output");
console.log(number++);
console.log(++number);
console.log(number)

let numbers = 3; 
console.log("Let see Output");
console.log(numbers++);
console.log(++numbers);
console.log(numbers)

function getPersonInfo(one ,two ,three){
    console.log(one)
    console.log(two)
    console.log(three)
}

const pers = "Raj" ;
const age =  30;

getPersonInfo`${pers} is ${age} years old`