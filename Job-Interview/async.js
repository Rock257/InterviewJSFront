// asynchronous JavaScript  : Asynchronous programming is a techniue that enables your program  to start a potentially long running task and still be able to be responsive to other events 

// Javscript Waits for no one  it excute as it gets  js statements  as JavaScript is a single-threaded, non-blocking, asynchronous,

// Javascript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming.

// Synchronous programming

const name = "Rahul Soni";
const greeting  = `Hello, My name is  ${name}`
console.log(greeting)

const makeGreeting = (name)=>{
    return `Hello her name  is ${name}`
}
console.log( makeGreeting("Saleh"))


// What if the synchronous function takes a long time?

// Prime numbers are natural numbers that are divisible by only 1 and the number itself.

const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const qouta = document.querySelector("#qouta");
const output = document.querySelector("#output")

document.querySelector("#generate").addEventListener("click" , () =>{
    const primes = generatePrimes(qouta.value);
    output.textContent = `Finished generating ${qouta.value} primes !`;
}) ;

document.querySelector("#reload").addEventListener("click" , ()=>{
    document.location.reload()
})


// By adding eventhandlers we can make js sync nature to async
// An event handler is a particular type of callback. A callback is just a function that's passed into another function


// This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions. For example, 



// function doStep1(init){
//   return init + 1 ;
// }
// function doStep2(init){
//   return init + 2  ;
// }
// function doStep3(init){
//   return init + 3 ;
// }
// function doStep4(init){
//   return init + 4 ;
// }


// function doOperation(){
//   let result  = 0 ;

//   result = doStep1(result)  // 1
//   result = doStep2(result)// 3
//   result = doStep3(result) //6
//   result = doStep4(result)//10
//   console.log( `result: ${result}`)
// }

// doOperation();


// THE ABOVE EXAMPLE USE CALLBACK 


const doStep1 = (init , callback)=>{
  const result = init + 1;
  callback(result)
}
const doStep2 = (init , callback)=>{
  const result = init +2;
  callback(result);
}
const doStep3 = (init , callback)=>{
  const result = init +3;
  callback(result);
}
fun


