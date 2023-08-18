// Recursive Function : A recursive function is a function that calls itself somewhere within the body of the function
// src = "https://www.freecodecamp.org/news/recursion-in-javascript/"
// Example : 

function recursiveFun(){
    //some code here...
    recursiveFun();
}

// recursiveFun function calls itself within the body of the function the body of function. it will repeat calling itself untill the desired output is achieved 

// The Three Parts of a Recursive Function

// three elements must be present. They are:

// The function definition.
// The base condition.
// The recursive call.

function doSomething(n){
    if(n===1){
        console.log("Task Completed")
        return
    }
    console.log("I am doing Something")
    doSomething(n-1)
}

doSomething(4)

// const  letsCount = (n) =>{
//     if(n==0){
//         console.log("Count Completed")
//         return
//     }
//     console.log(n)
//     letsCount(n-1)
// }

// letsCount(10);

// find factorial using looping  

const findFactorial = (num)=>{
    let factorial = 1
    for( i = num; i>0; i-- ){
        factorial *=i
    }
    return factorial
}

findFactorial(5);

// Note : The multiplication assignment ( *= ) operator performs multiplication on the two operands and assigns the result to the left operand.


//output   =  120

// Method -2  

const factorial = (n)=>{
    if(n==0) return 1 ; 
    return n*factorial(n-1)
}

const findFact  = factorial(10);
console.log(findFact);

// VM1033:7 3628800



// How to find the  factorial  with recursion 

function findFactor(num){
    if(num===0) return 1 
    let factorial = num*findFactor(num-1)
    
}