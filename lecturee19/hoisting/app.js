
//valid 
// fun();  //-->can call function before its declaration
// let a=10;
// console.log(a);
// function fun(){
//     console.log("having fun");
// }


//error
// fun();
// console.log(a);
// let a=10;
// function fun(){
//     console.log("having fun");
// }

//undefined
// fun();
// console.log(a);
// var a=10;
// function fun(){
//     console.log("having fun");
// }



//error - cannot access a before initialisation---hoisting
// fun();
// console.log(a);
// const a=10;
// function fun(){
//     console.log("having fun");
// }


// var a=10;
// console.log(a);
// var a=100;
// console.log(a);
// function fun(){
//     var a=200;
//     console.log(a);
// }
// fun();
// console.log(a);
//output- 10 100 200 100

// var a=10;
// console.log(a);
// var a=100;
// console.log(a);
// if(true){
//     var a=200;
//     console.log(a);
// }
// console.log(a);
//output- 10 100 200 200


// let a=10;
// console.log(at);
// a=100;
// console.log(a);
// if(true){
//     let a=200;
//     console.log(a);
// }
// console.log(a);
//output- 10 100 200 100

