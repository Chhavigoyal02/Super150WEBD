//for -in
let obj={
    naam:"kaju",
    age : 1,
    papa:"abc"
}

for(let i in obj){
    console.log(i);
    //console.log(obj.i); ---> this is wrong ,use it as array
    console.log(obj[i]);
}

console.log(obj.naam);
// console.log(obj[naam]);//--->here this is wrong,array method doesn't work outside loop
console.log(obj["naam"]);  //-->valid
// key of object is stored as string in type of array


//for-of()
let arr=[10,20,true,30,40];
for(let item of arr){
    console.log(item);
}


 