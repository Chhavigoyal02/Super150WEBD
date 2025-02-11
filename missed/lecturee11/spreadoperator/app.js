

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];

// concat --old way
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// better way to concat = spread operator(modern way)
// arr2=[...arr1,...arr2];
// console.log(arr2);

// this spread operator can be used in object too
// let obj = {
//     l:10,
//     m:20,
//     n:'Chhavi'
// };
// let obj2 = {
//     ...obj,
//     age:22
// }

// console.log(obj2);

// if i want to delete to the 2nd property of object you just have to write delete keyword and mention the property you want to delete
// console.log(obj);  
// delete obj.m;
// console.log(obj);



// why we want spread operator? 
console.log(Math.min(0,1,2,3,4,5,6,7,8,9));//0
console.log(Math.max(0,1,2,3,4,5,6,7,8,9));//9

let arr1 = [0,1,3,4,5,6,7,8,9];
console.log(Math.min(arr1));//NaN
console.log(Math.max(arr1));//NaN
// so to solve this problem we use spread operator here
console.log(Math.min(...arr1));//0
console.log(Math.max(...arr1));//9

