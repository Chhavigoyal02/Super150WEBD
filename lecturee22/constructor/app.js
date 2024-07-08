// function sam(){}

// let out = sam();
// console.log(out);  
// error

//-------------------------
// now this is constructor function (when we write a new keyword in front of function calling , that function become constructor)
// it a convention that we write constructor function's name with capital letter
// construction function object create krta h
function Sam(){
    this.naam = "kaju"; // property add krne k liye this use krte h constructor m 
    this.umar = 2;
}
// colon nhi = use krte h property assign krte wkt
// or property k last m semicolon use krna h (, nhi)
// we never return anything from constructor(bcz iska object return krne ka hi kaam h)
let out = new Sam();
console.log(out);  

//out.__proto__ === Object.prototype //false
//(because ye hard coded or hand written nhi h to iska parent object.prototype nhi hoga)
// is object ka dender proto constructor.prototype hoga 
//out.__proto__ === Sam.prototype //true
//out.__proto__.__proto__ === Object.prototype //true


