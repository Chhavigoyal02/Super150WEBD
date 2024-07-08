// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,20);

//-------------------------

// function sum(a, b) {
//     return a + b;
// }
// let ans = sum(10, 20);
// console.log(ans);

//----------------------------

//arrow-function:
// let sum = (a, b) => {
//     return a + b;
// }
// let ans = sum(10, 20);
// console.log(ans);

//-----------------------------

// let sqr = (n) => {
//     return n * n;
// }
// sqr(5);

//--------------------------------
//way-1
// let sum = (a, b, c) => {
//     return a + b + c;
// }
// let ans = sum(10, 30, 40);
// console.log(ans)


//--------------------------------
//way-2 (if you want to return any thing which is in single line so you can omit paranthesis and return keyword)
// let sum = (a, b, c) => a + b + c;
// let ans = sum(10, 30, 40);
// console.log(ans)

//--------------------------------
//way-3(if one argument is passed in a function then you can omit brackets also)
// function sqr(a){
//     return a*a;
// }
// let ans = sqr(5);
// console.log(ans);

// this can be written as :
let sqr = a => a*a;
console.log(sqr(4));