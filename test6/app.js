//TASK-1
//1)Scope
function outerfunc() {
    let outerVar = 'I am outer';
    function innerfunc() {
        let innerVar = 'I am inner';
        console.log(outerVar); // accessible because of scope chain as this variable has been defined in its parent function
        console.log(innerVar); // accessible directly
    }
    innerfunc();
}
outerfunc();


//2)Array Methods
let students = [
    { name: 'A', age: 22 },
    { name: 'B', age: 20 },
    { name: 'C', age: 25 }
];
students.sort((a, b) => a.age - b.age);// Sorting the array based on the 'age' property
console.log(students);


//3)Constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
let book1 = new Book('ABCD', 'PQRS', 295);
console.log(book1);


//4)Call Back
function processData(array, callback) {
    let result = [];
    for (let num of array) {
        result.push(callback(num));
    }
    return result;
}
function double(num) {
    return num * 2;
}
let nums = [1, 2, 3, 4, 5];
let res = processData(nums, double);
console.log(res);


//5)Promise
function fun(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
fun(2000).then(() => console.log('This msg will come after 2 secs.'));


//TASK-2
//1)
function outer() {
    let message = 'Hello from outer function!';
    function inner() {
        console.log(message);
    }
    return inner; //changed to return inner function
}
let innerFunc = outer();
innerFunc(); // Output: "Hello from outer function!"


//2)
console.log(myLet);
let myLet = 20; //Output: ReferenceError: Cannot access 'myLet' before initialization