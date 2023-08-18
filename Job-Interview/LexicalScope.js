// fundamentals and core concepts

var x = 5;

var y 

var z =  ""

console.log( x , y,z )

//let z = 20   ,  will show reference error as the z used before intilisation of variable


// a. Lexical Scoping  - The lexical  scope  is the scope of a variable or function based on where it is defined in the source code  

        // 1. Global Scope: When a variable is defined outside of any functions or blocks, it has a global scope.
        //   Example : 
        const  name  = "Rahul" ;
       
        const sayHi = ()=>{
            console.log("Good Morning : " + name)
        }
        sayHi()

        // 2. Local Scope: When a variable is defined within a function or block, it has a local scope. This means that it can only be accessed within that function or block.
          // Example : 
           
          const sayGreet = () =>{
            let fname = "Raj"
            const greetName = ("Good Night Dear : " + fname)
            console.log(greetName);
          }
          sayGreet();
          
        //   console.log(fname)  : it will reference error as the fname is in block scope of sayGreet function where as we are tring to access of the scope

        // 3. Nested Scope: When a function is defined within another function, it has access to variables defined in the parent function. This is known as nested scope.
        // Example :

        const outer = ()=>{
            let name  ="John" ; //outer function variable 
            
            const inner = ()=>{
                console.log("Hello" + name );
            }
            inner();  
        };
        outer();

        // 4. Block Scope: ES6 introduced the let and const keywords, which allow variables to have block scope. This means that variables defined within a block of code (such as within an if statement or a for loop) can only be accessed within that block.
        //Example : 
        function sayHello(){
            let name = "Jenny"  //function varible 
            if(true){
                let message = "Hello My Dear " ; //Block variable 
                console.log(message +  ""+ name)
            }
            // console.log(message) ;  reference error 
        }

        sayHello()
          // Conclusion: In JavaScript, the lexical scope is used to determine the accessibility of variables and functions within a program.
