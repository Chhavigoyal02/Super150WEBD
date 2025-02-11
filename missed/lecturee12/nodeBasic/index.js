

// let arr = process.argv
// console.log(arr);

let arr = process.argv.slice(2);
// console.log(arr);

// for (let i of arr){
//     console.log(`hello from ${i}`);
    
// }

// let num = process.argv[2];//this is correct but index is not always going to be 2 not fixed here so we are gonna use pop
let num = process.argv.pop();
for(let i=1;i<=num;i++){
    console.log(i);
 
}