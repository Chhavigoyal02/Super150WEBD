// lexical scoping 
// let a=10;
// console.log(a);
// function fun(){
//     console.log(a);
// }
// fun();

//  let a=10;
// function fun1(){
//     let b=100;
//     function fun2(){
//         console.log(b);
//         function fun3(){
//             console.log(a);
//         }
//         fun3();
//     }
//     fun2();
// }
// fun1();
//output- 100 10


// console.log(a)
// console.log(b)
// console.log(c)
// var a=10
// let b=100
// const c=1000
//output - undefined error   and c is not printed cuz interpreter


// var a=10;
// function fun(){
//     console.log(a); //--> hoisting hori h
//     var a=200;
//     console.log(a);
// }
// fun();
// console.log(a);
// output -- undefined(qki isne local m hi check krliya or wha undefined tha) 200 10


// var a=10;
// if(true){
//     console.log(a);
//     var a=200;
//     console.log(b);//hoisting
//     console.log(a);
// }
// let b=300;//-->dead temporal zone
// console.log(b);
// output - 10 error








 