//1. Object/Method Calling --> here,this keyword point to object

// let obj = {
//     a: 10,
//     b: 200,
//     fn: function(){
//         console.log(this);
//     },
// };
// obj.fn(); //object dependent

//---------------------------
//2. Direct Calling --> here,this keyword point to window 

// function sam(){
//     console.log(this);
// }
// sam();//direct call ho gya h function (kisi object pr depend nhi h 1st wale ki trh)

//-----------------------------
//eg:   (isme object m kch change nhi kiya h, this keyword bs calling pr depend krega)
// let obj2= {
//     a: "sam",
//     fn: function(){
//         console.log(this);
//     }
// };
// obj2.fn(); //-- object calling
// let ans = obj2.fn;
// ans()//---direct calling(window)

//--------------------------------
//eg2:  (automatic calling -- window )
// console.log(this);


//------------------------------------
//eg3: 
// let obj3 = {
//     a: 10,
//     fn: function(){
//         function sam(){
//             console.log(this)
//         }
//         sam();
//     },
// };
// obj3.fn();
//output - window (bcz this function wali line chli sam function k through or sam function direct call hua h)


//------------------------------------------
//eg4:
// let obj4 = {
//     a: 10,
//     fn: function(){
//         function sam(){
//             console.log(this)
//         }
//         let a = sam;
//         return a;
//     },
// };
// let out = obj4.fn();
// out();//direct(window)

//------------------------------------------
//3. Constructor Calling (here this keyword points to new object)
// function Sam(){
//     this.name = "sam"
// }
// let obj1 = new Sam();
// console.log(obj1);

//----------------------------------------
//4.
//-----------------------------------------

//5. Arrow Functions (in this case , it depends on parent's this is calling whom)
let obj = {
    a:20,
    fn: () =>{
        console.log(this);
    }, 
};
obj.fn();

//eg1:
// let obj2 = {
//     a:100,
//     fn: function(){
//         console.log(this);
//         let sam = () => {
//             console.log(this);
//         };
//         sam();
//     },
// };
// obj2.fn();




// const obj={
//     a:"hi",
//     b:"bye",
//     c:()=>this
// }
// console.log();

//window

// const obj={
//     a:"hi",
//     b:"bye",
//     c:()=>this.a
// }
// console.log();

//undefined