// let arr=[10,20,30,40,50];

//foreach only iterate krta h ,kch bhi return nhi krta.
// arr.forEach(function (item,index){  //pehle hamesha item hi rhega then index in array
//     console.log(`index : ${index} -- item: ${item}`);
// });

//--------------------------------------
//ek new array return krta h with the same size as the original array.
// let arr=[10,20,30,40,50]; 
// let newArr = arr.map(function(item,index){
//     return item*2;
// });
// console.log(arr);
// console.log(newArr);


//----------------------------------------
// also return new array but its size will vary (does not depend on original array). new array me whi add hoga jo condition m true return krega.
let arr = [10, 20, 30, 40, 50];
let newArr = arr.filter(function (item, index) {
    if (item >= 50) {
        return true;
    }
});
console.log(arr);
console.log(newArr);


