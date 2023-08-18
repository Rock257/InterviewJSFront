const prime = 100;
function isPrime(n) {
    for(i=2; i<=Math.sqrt(n);i++){ 
    if(n%i===0){
        return false
    }
}
    return n>1
}

// isPrime(8);   false
// isPrime(7);   true

// Note : Math.random() always returns a number lower than 1.

// Returns a random integer from 0 to 10:

Math.floor(Math.random() * 11); 

// function proper provide random no  
getRndInteger();
const getRndInteger =()=>{
    return Math.floor(Math.random()*10);
}

// This JavaScript function always returns a random number between min (included) and max (excluded): 

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

getRndInteger(1,10);