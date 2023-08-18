// Closure  - A closure is the combination of a function bundled together(enclosed) with reference to its surrounding of a function(the lexical environment)   OR  
// a closure gives you access to an outer  function scope from an inner function 


// Lexical scope  

const init =()=>{
    var name =  "Pizzza"
    // name is locally created by init 
    const displayName =()=>{
        // display is the inner function , that forms the closure 
        console.log(name)
        // use varible declared  in the parent function 
    }
    displayName();
}
init()

// This is an example of lexical scoping

// A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the line where the variable is declared and initialized. 
// The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

function makeAdder(x){
    return function(y) {
        return x + y;
    }
}

const add10 = makeAdder(10) 
const add30 = makeAdder(30)

console.log(add10(2)) 
console.log(add30(20))
 
// In this above example we have a function makeAdder(x) , that takes a single argument x
// and return a function(y) takes y as argument  and return sum of x and y  

// In the above makeAdder is function factory add10  , add30 

//add10 ,add30 both form closures , They share the same function body defination  but store
// different lexical environments  in add5's lexical environment  
// for add10  
