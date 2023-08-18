// Example 1: Let’s take an example to understand event bubbling and event capturing.

// const grandParent = document.getElementById('grandparent');
// const parent = document.getElementById("parent");
// const child = document.getElementById('child');

// grandParent.addEventListener('click' , (e)=>{
//     console.log("GrandParent is logged in console") ; 
// }, {capture : false}) 

// parent.addEventListener("click" , (e)=>{
//     console.log("Parent is logged in console")
// },{capture : false})

// child.addEventListener("click" , (e)=>{
//     console.log("Child is logged in console")
// } , {capture : false})


// Closest to fartherest the flow of event bubbling  when child div is clicked  


// When we clicked on the div with the child as its id, we should get the output as ‘child’ on our console. But unexpectedly, we are receiving a different output even we have not clicked on divs with parent and grandparent as their id. The concept of event bubbling comes into the picture. The child div lies inside the parent div as well as in the grandparent div. So, when the child div clicked, we indirectly clicked on both parent div and grandparent div. Thus, propagation is moving from inside to outside in the DOM or we can say events are getting bubble up. 

// Therefore, the process of propagating from the closest element to the farthest away element in the DOM (Document Object Modal) is called event bubbling.




const grandParent = document.getElementById('grandparent');
const parent = document.getElementById("parent");
const child = document.getElementById('child');

grandParent.addEventListener('click' , (e)=>{
    console.log("GrandParent is logged in console") ; 
}, {capture : true}) 

parent.addEventListener("click" , (e)=>{
    console.log("Parent is logged in console")
},{capture : true})

child.addEventListener("click" , (e)=>{
    console.log("Child is logged in console")
} , {capture : true})


// Fartherest to Closest  the flow of event bubbling  when child div is clicked  


// When capturing is true  
// it’s clearly visible that the ancestor divs of the child div were printing first and then the child div itself. So, the process of propagating from the farthest element to the closest element in the DOM is called event capturing. Both terms are just opposite of each other.


