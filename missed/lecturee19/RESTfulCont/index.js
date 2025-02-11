// RESTful routing
// REST -> REpresentational State Transfer
// this isjusta way/architectural style(way of writing) of routes to interact with lient and server


// REST -> RESTful routing and RESTapi
// RESTful routing -> jab aap HTML, CSS, JS ye page show krte ho (jo abhi tk hum kr rhe the)
// RESTapi -> whenever you hit a url, the data you get back; it is baiscally a architecture

// redirect -->get request bhejo, jis path pr bhejna h vo tum mention krte ho
// jese koi blogging webiste h usme humara ek oage h diaply all blogs ka; ab hum koi naya blog add krre h to add krne k bad redirect ho jaaba chahiye diplay all blogs wale page pr, to behind the sccenes m ek get request jaygi to blogs page



const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const {v4:uuid} = require('uuid');

// dummy array (alternative of DB right now)
let comments = [
    {
        // id:0,
        id:uuid(),//returns a unique random id in form of string
        username:"Akshay",
        comment:"kuch nhi"
    },
    {
        // id:1,
        id:uuid(),
        username:"Sachin",
        comment:"kaun"
    },
    {
        // id:2,
        id:uuid(),
        username:"Javed",
        comment:"laal h bhayi laal h"
    },
    {
        // id:3,
        id:uuid(),
        username:"Ojaswa",
        comment:"puls aagyi puls"
    }
]


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));//for form encoded data 
app.use(methodOverride('_method'));//method overriding from post to patch

// root route
app.get('/',(req,res)=>{
    res.send("ye root route h");
})

// task-1 (display a list of all the blogs)
app.get('/blogs',(req,res)=>{
    res.render('index',{comments});
})

// task-2(show just a form to add new blog)
app.get('/blog/new',(req,res)=>{
    res.render('new');
})

// task-3 (to actually add that blog in DB(in our case array))
app.post('/blogs',(req,res)=>{
    // console.log(req.body);
    // res.send("data aa gya!");
    let {username,comment} = req.body;
    comments.push({username,comment,id:uuid()});
    res.redirect('/blogs');//render krte wakt sirf file ka naame dena hota pr redirect krte wakt pura path dena hota to slash lgana pdega because ye get request jaa rhi h
    
})

// task-4 (to show info about one particular blog)
app.get('/blogs/:id',(req,res)=>{
    let {id} = req.params;
    // console.log(id);
    let foundComment = comments.find( comment=>comment.id == id);
    // console.log(foundComment);
    res.render('show',{foundComment});
})

// task-5(to edit one particular blog)
app.get('/blogs/:id/edit',(req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find( comment=>comment.id == id);
    res.render('edit',{foundComment});
})

// task-6(actually updating the blog using patch and not put)
app.patch('/blogs/:id',(req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find( comment=>comment.id == id);
    let {comment} = req.body;
    foundComment.comment = comment;//changing already present data to newly calculated data
    res.redirect('/blogs');
})

// task-7(to delete a particular blog)
app.delete('/blogs/:id',(req,res)=>{
    let {id} = req.params;
    let newArray = comments.filter(comment => {return comment.id != id});
    comments = newArray;
    res.redirect('/blogs'); 

})


app.listen(8080,()=>{
    console.log("Server running at port 8080");
    
})

// Lecture 20 

// what is data?
// collection of properties

// what is information?
// meaningful/useful data

// What is databse(DB)?
// collection of similar king of data

// what else can we use to store the data?
// file system

// why dont we use file system now?
// DATA REDUNDANCY, integrity, ineffeciency, security less,searching difficult, scalibilty less,linited data....

// what s data redundancy?
// repitition, duplicacy

// Types od Database (2)
// SQL(Structured Query language) -- a language not a database
// vo  databases jo output/result show krne k liye SQL queries ka istemaal krte hai un DB ko SQL DB bolte h
// NOSQL -- jo SQL ko use nhi krte

// What is DBMS?(database management system)
// basically a software jo data ko manage krta h

// Types of DBMS:-
// RDBMS(Relational DBMS) --> jahan pr tables hote h --> SQL
// NRDBMS(Non Relational DBMS) --> jahan pr tables nhi hote --> NOSQL

// Primary Key -> uniquely identifies the table record

// Foriegn Key -> helps in connecting two tables and fk is a primary to the other table

// NOSQL Databases
// in the form of objects (no table i.e. no rows or no cols) ; like the json data

// which DB to choose?(SQL/NOSQL)
// based on CAP theorem (consistency, availability, partition tolerance)
// 1.CONSISTENCY - SQL is better than NOSQL in case of consistency
// 2. AVAILABILITY - NOSQL is better than SQL in case of availability
// 3. PARTITION TOLERANCE - both are equal in this case

// MONGODB

// Why MongoDB? (bzr its compatibilty with node and express is highest);(this is the top relational dbms);(used widely);(easy)
// architecture -2 types 
// 1.monolithic -- use only 1 databse
//2.microservice -- can use multiple database

// COMMANDS-
// to open your mongo shell -- mongosh
// to exit from the shell -- exit or press ctrl+c 2 times
// to check the different databases -- show databases; or show databases or show dbs (show dbs me empty database nhi show hota, min 1 entry honi hi chahiye)
// (in case of mongodb ; is not needed but in case of sql ; is compulsory)
// what is this test? -- it is a default database; it is of no use
// to check the db on which i am currently working right now -- db
// to go to one particular db or change the database + can create one new db -- use db_name(case sensitive)
// to delete the database - db.dropDatabase() -- delete the current standing DB -- it is irrversible process so never use it

// What is a collection?
// sql me tables hote h or nosql m collections hote h

// what is a document?
// each atomic entity inside a collection is a document (document DOM m bhi hota h or DB me bhi!!)

// How the data is being stored in database?
// in BSON form (Binary JSON); BSON is faster tha JSON; BSON occupies less space than JSON; BSON supports more basic datatypes than JSON


// Lecture - 21
// CRUD in database/MongoDb(Create, Read, Update, Delete):-

// *jab bhi ek document add hota h, Mongodb automtically use document k pass ek unique id generate krega*

// DB -> Collection -> Document(CRUD)


// CREATE AND READ
//1) db.movies.insertOne({name:"sam",imdb:7.77}) --> db is current db; movies is a collection; insertOne is a mongoDB method to add one entry in that collection and always accepts the object
//2) db.movies.find({}) or db.movies.find() --> find is a mongoDb method to find all the documents inside a collection without any condition; 
//3) db.movies.insertMany([{name:"spiderman",imdb:8},{name:"batman",imdb:2},{},{},...]);

// to find document with the condition:-
//4) db.movies.find({imdb:6}) or db.movies.find({imdb:6,name:"spiderman"}) , idhr iska mtlb h imdb 6 AND name spiderman


// UPDATE
// 5) db.movies.updateOne({name:"flash"},{$set:{imdb:10}}) or
//    db.movies.updateOne({name:"flash"},{$set:{imdb:10,name:"flash2"}})
// first object tell konse doc ko update krna h, dusra object kya update krna h 
// idhr agr 1 se jayada flash movie hoti h to sbse phle hi bs update hogi

// 6) db.movies.updateMany({name:"flash"},{$set:{imdb:10}})
// idhr saari flash naam ki movies update ho jaygi


// DELETE
// 7) db.movies.deleteOne({name:"flash"}) 
// flash name ki  movie delete ho jayngi(if multiple then first one got deleted)
// if no consition given --> db.movies.deleteOne({name:"flash"}) --> first movie from the db gots deleted

// 8) db.movies.deleteMany({name:"flash"}) 
// saari flash name ki movie delete ho jayngi
// db.moview.deleteMany({}) --> saari movies delete ho jayngi db se


// MONGODB OPERATIONS

// 1.equals -> $eq
// db.movies.find({imdb:{$eq:8}})

// 2.greater than or greater than equals -> $gt or $gte
// db.movies.find({imdb:{$gte:7}})