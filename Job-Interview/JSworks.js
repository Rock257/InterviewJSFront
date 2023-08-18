var n = 5;

function square(num){
    var ans = num*num;
    return ans
}

var square2 = square(5)
console.log(square2)
var square3 = square(3)

// a  global execution context is created as the JS  code run  just like a big box 
// two parts were created a

// 1. memory component : memory creation phase
// 2.code component : code


// in first phase JS will allocates memory to all veriable and function  in key value pair 
// it  allocates memory to varible and reserves space for var. and fun  
// var allocates a special value called undefined  just like place holder for vairable  undefined also a reserved Keyword in JS

// n : undefined
//  square :  (num){
//              var ans = num*num;
//              return ans
//          }
 
// {the whole code of function will copy here }

// square2 : undefined
// square3 : undefined

// in 2nd phase code execution phase   : 

// Now js will runs through whole code line by line 

// n : 5

//  square : {the whole code of function will copy here }     ,

//  Here nothing to execute as JS will move through to next line  as it is function will not execute till not called 

// 1. memory component : memory creation phase
// 2.code component : code

// 1. memory component 

// num : undefined
// ans : undefined 

// 2.code component : code

// num  : 5
// ans  : 5*5 25  // value of num* num


// square2 : square(n)

// return keyword  : as the code exxecution is done go back to the where the function invocation is done 
// the whole code is vanised in execution context 

// square2 = 25 
// as the function invocation  will create a new execution context is created  and execution will take place in two phase 

// square3 : undefined

// same  as brand new execution context is creted and go through the 2 phases

// square3 : 9



// Call stack : call stack maintains the orderof execution of execution contexts 
 
// JS manages the above process by the callstack

// Call Stack also known as   :
// 1. execution context stack 
// 2. program stack 
// 3.control stack
// 4. runtime stack
// 5. machine stack 