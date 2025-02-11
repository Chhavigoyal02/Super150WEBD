
// file 1
let pi = Math.PI;
console.log(pi);

// let ans = (num) => {return num * num}; orr
let ans1 = num => num*num;

let ans2 = (a,b) => a+b;

console.log(ans1);
console.log(ans2);


// ye file by default export behaviour show krega bcoz require dekh liya
//by default exports an empty object {}
// so this js file is behaving like a module

// module.exports = {};//by default
module.exports = {pi,ans1,ans2};//now no empty object as we override the empty object


// module.exports is a object but why this is not in a key value pair format
// this is because whenever the key anv value names are same then we can write it like this only one


// now can i export something other than object?? --> YES
module.exports = 'chhavi'; 
