

let fs = require('fs');
// console.log(fs);

// now by using file system we will perform CRUD(create,read,update,delete)

// CREATE (or we can say write)

// let data = 'hello world from chhavi world';
// let data2 = 'backend chal rha h bhut bhayanakar!!'
// fs.writeFile('abc.txt',data,{
//    enocding:'utf-8',
//    flag:'w'
// },(err)=>{
//     if(err) {throw err}
//     console.log("File written successfully!");
// })

// other way
// fs.writeFileSync('abc.txt',data2); 


// ----------------------------------------------------
// READ

// fs.readFile('abc.txt',{
//     encoding:'utf-8',
//     flag:'r'
// },(err, data) =>{
//     if(err) {throw err}
//     console.log(data);
// })

// other way
// while reading a file system, we need to mention the encoding(utf-8) and flag to avoid the buffer
// let data = fs.readFileSync('abc.txt',{
//     encoding:'utf-8',
//     flag:'r'
// });
// console.log(data);

// yaa fir buffer se bachnce k liye ye bhi kr skte h:-
// let data = fs.readFileSync('abc.txt');
// console.log(data.toString());


// -------------------------------------------------------------
// UPDATE

// fs.appendFile('abc.txt','chhavi goyal',(err)=>{
//     if(err){throw excpetion}
//     console.log("Updated successfully!");
// })

// Other way
// fs.appendFileSync('abc.txt','aag lage basti m baba to betha apni mastii me');


// -------------------------------------------------------------------
// DELETE --file hi gayab ho jaygi

// fs.unlink('abc.txt',(err)=>{
//     if(err){throw excpetion}
//     console.log("Deleted successfully!");
// })


// Other way
fs.unlinkSync('abc.txt');