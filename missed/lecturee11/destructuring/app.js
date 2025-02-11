

// array destructuring
// let fruits = ['apple', 'banana', 'mango', 'kiwi', 'orange', 'grapes'];

// earlier way or older way
// let first = fruits[0];
// let second = fruits[1];
// console.log(first);
// console.log(second);

// destructuring way
// let [pehla,dusra,teesra,fourth] = fruits;
// console.log(pehla);//apple
// console.log(dusra);//banana


// ---------------------------------------
// let fruits = ['apple', 'banana', 'mango'];

// let [pehla,dusra,teesra,fourth] = fruits;
// console.log(pehla);
// console.log(dusra);
// console.log(teesra);
// console.log(fourth);//undefined

// can give default values
// let [pehla,dusra,teesra,fourth='papaya'] = fruits;
// console.log(pehla);
// console.log(dusra);
// console.log(teesra);
// console.log(fourth);//papaya

// if there is already a fourth value as grapes present in array but give papaya as default value to fourth while destructuring the array then grapes will be printed as fourth value(override)
// let fruits = ['apple', 'banana', 'mango','grapes'];
// let [pehla,dusra,teesra,fourth='papaya'] = fruits;
// console.log(pehla);
// console.log(dusra);
// console.log(teesra);
// console.log(fourth);//grapes


// ------------------------object destructuring---------------------
// let car = {
//     name:'Nano',
//     price:100000
// }

// older way or earlier way
// let n = car.name;
// let p = car.price;
// console.log(n);
// console.log(p);

// destructuring way    
// let {n,p} = car; //---> wrong way
// console.log(n);//undefined
// console.log(p);//undefined
// as object is onordered data struture it does not understand n is pointing to what and p is pointing to what

// so we have to mention the exact property name of object
// let {name,price} = car;
// console.log(name);//Nano
// console.log(price);//100000

// if we want to give different name to the property(key changing)
// let {name:n,price:p} = car;
// console.log(n);//Nano
// console.log(p);//100000
// console.log(price);//error(price is not defined; key has changed to p)


// let car = {
//     price:100000
// }

// let {naam,price} = car;
// console.log(naam);//undefined
// console.log(price);//100000


// giving default values
// let {naam="nano",price} = car;
// console.log(naam);//nano
// console.log(price);//100000


let car = {
    name:'Nano',
    price:100000
}
let {name:naam="Maruti",price} = car;
console.log(naam);//Nano(default value cheeze change nhi kr skti)
console.log(price);//100000




