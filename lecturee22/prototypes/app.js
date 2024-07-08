let obj ={
    a:10,
    b:"sam",
    c: function(){
        console.log("samarth");
    },
};

console.log(obj.b);
console.log(obj.c()); //agr kch return nhi hota h function se to by default vo undefined return krta h

console.log(obj.d); //undefined here obj is available
// console.log(obj.e());//error - as function is not declared 
console.log(obj.toString());//yha pe error nhi aaya h bcz iske pas nhi h ye property to ye apne parent(prototype) k pas check krega 


//prototype - it is a fall back source to an object.
// each object has its fall back source

obj.__proto__ === Object.prototype // true
obj.__proto__.__proto__ === null //true( object.protot ype null hota h)
obj.__proto__.__proto__ === Object.prototype //false


arr.__proto__  === Array.prototype // true
arr.__proto__.__proto__ = Object.prototype // true




