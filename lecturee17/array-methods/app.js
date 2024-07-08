let arr=[3,4,5,6,7,8,9]

//1.length
//console.log(arr.length);

//2.push() --add the new element in last
// let returntype=ypr=arr.push("sam");
// let returntype=ypr=arr.push("sam",20,false);//multiple things at a time are valid
// console.log(returntype);//returning the length of array after pushing is done
// console.log(arr)


//3.pop()--delete the element from last  ,,,, here multiple deletion at a time is not allowed
//arr.pop(9);
//arr.pop(10);//still delete the last element irrespective of the argument
// let returntype=arr.pop();
// console.log(returntype);//returning the element which get removed 
// console.log(arr);

//4. unshift() -- push from start
//let returntype = arr.unshift('monu bhaiya ki shadi');
// let returntype = arr.unshift('monu','bhaiya', 'ki', 'shadi'); // --multiple is valid
// console.log(returntype);//returning the length after pushing 
// console.log(arr);


//5. shift() -- pop from start
let returntype=arr.shift();
console.log(returntype);
console.log(arr);


