// function Sam(naam,umar,favRang){
//     this.name=naam;
//     this.age=umar;
//     this.favColor=favRang;
// }
// let p1= new Sam("sam",90,"black");
// console.log(p1);

//--------------------------------------------------------

//p1.__proto__ === sam.prototype (true)
// p1.__proto__.__proto__ === Object.prototype (true)
// Sam.toString() [object Object]

// let obj={
//     a:10,
//     b:function(){
//         console.group("sam");
//     },
// };
// console.log(sam.c() undefined
// console.log(sam.()) error

//----------------------------------------------------------

// function Sam(naam,umar,favRang){
//     this.name=naam;
//     this.age=umar;
//     this.favColor=favRang;
//     this.fn= function(){
//         console.log("hello")
//     }
// }
// let p2=new Sam("vohra",190,"purple")
// console.log(p2)

//--------------------------------------------------

// function Sam(naam,umar,favRang){
//     this.name=naam;
//     this.age=umar;
//     this.favColor=favRang;

// }
// Sam.prototype.fn=function(){
//     console.log("hello")
// }
// let p1= new Sam("sam",90,"black");
// let p2=new Sam("vohra",190,"purple")
// console.log(p1,p2);

// --------------------------------------------
// class Sam{
//     constructor(naam,umar,favRang){
//         this.name=naam;
//         this.age=umar;
//         this.favColor=favRang;
//     }
//     fn(){
//         console.log("kaju");
//     }
// }

// let p1= new Sam("sam",90,"black");
// let p2=new Sam("vohra",190,"purple")
// console.log(p1,p2);

// ------------------------------------------
class Person{
    constructor(naam,umar,email){
        this.name=naam;
        this.age=umar;
        this.email = email;
    }
    greeting(){
        return `good morning from ${this.name}`;
    }
    level(){
        console.log("laval sbke niklenge");
    }
}
class Student extends Person{
    constructor(naam,umar,email,btach){
        // super(naam,email,umar);//ordering se frk pdega
        super(naam,umar,email);
        this.batch=batch;
    }
    level(){
        console.log("jo end tk maujood rhega");
    }
}
let p1= new Person("Samarth",44,"sam@gmail.com");
let p2=new Person("nikhil",19,"nikhil@gmail.com");
let p3= new Student("Samarth",44,"sam@gmail.com","Super150");
console.log(p1,p2);
p1.level();//--> jo end tk maujood rhega