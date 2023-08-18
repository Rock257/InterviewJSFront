// setTimeout and setInterval   are web API

// Syntax  =>

// setTimeout(code)
// setTimeout(code ,delay)
// setTimeout(functionRef, delay, param1) 

// functionRef : A function to be executed after the timer expires
// delay : time in miliseconds  


setTimeout(()=>{
    console.log("First")
},9000)
// will take  second

setTimeout(()=>{
    console.log("second")
},4000)

setTimeout(()=>{
    console.log("Hello World")
},1000)