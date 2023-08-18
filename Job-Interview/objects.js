// JavaScript Objects 

const  car = {
    type : "Fiat" , 
    model : 500 ,
    color : "white", 
    power : "40 BHP", 
    steeringType :" Power Steering",
     LxB  : "2000 CM x 1200 CM" , 
    fullName : function(){
        return this.type + " " +  this.color
    }
}


// In JavaScript, the this keyword refers to an object.

// Method to access property and method  of an object 

const carName = car.fullName() ;

console.log(carName)
console.log(car["model"])

// Looping through a Object  
// let txt = "";

// for(let model in car){
//     txt += car[model]
// }

// console.log(txt)

// add  a property in a object  
console.log(car)

car.fuelCapecity = "25 KMPL"

delete car.fuelCapecity
// or 
// delete car["fuelCapecity"] 

console.log(car)