//function definition/declaration 
function diwali(){
    console.log("Happy Diwali");
}
//function calling
// diwali();
// diwali();
// diwali();

//---------------------------------------------

// function sum(){
//     let a=10;
//     let b=20;
//     console.log(a+b);
// }
// sum();

//---------------------------------------------


//parameterised function
// function sum2(a,b){  //--->without declaring variable
//     console.log(a+b);
// }
// sum2(10,30);

//---------------------------------------------

// function kajuLalla(a,b){   //---> output - NaN (Not a number)
//     console.log(a+b);
// }
// kajuLalla(250);
//datatype of NaN is number.


//---------------------------------------------


//default paramterised functions
// function kajuLalla(a=60,b=100){    //---> output : 350 and value of a will be 250
//     console.log(a+b);
// }
// kajuLalla(250); //--> this value is dominant and overwrites 60.



//---------------------------------------------


// function sam(a){
//     let kaju;
//     console.log(kaju);//---> undefined
//     console.log(a+kaju); //--> NaN
// }
// sam(30);


//---------------------------------------------

//case-1 --> js engine khudh undefined assign krega
// let kaju;
// console.log(kaju);// --->undefined
// console.log(kaju+20);//--->NaN

//case-2 --> we dont do this in real
// let kaju=undefined;
// console.log(kaju);
//data type of undefined is undefined

//case-3 --> ye coder krega
// let kaju=null;
// console.log(kaju);//-->null
// console.log(kaju+20); //--> 20
// console.log(typeof(kaju));//--> object







