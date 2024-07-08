
//set-2

//question-1
function createCounter() { 
    let count=0; 
    return function() {   
        return count++; 
    }; 
} 
let counter = createCounter(); 
counter();
console.log(counter() );
console.log(counter() );
//output: 1
//2




//question-2
myFunc();
function myFunc() {   
    console.log("Executing myFunc"); 
} 
//Output: Executing myFunc