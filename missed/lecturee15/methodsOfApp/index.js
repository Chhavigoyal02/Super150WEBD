const express = require('express');//return a function
const app = express()//return a object, it is an instance

// app.use() --> it is middleware function 
// middle ware function is a function which runs everytime whenever any kind of request aati h user/browser k through
// there is call back function compulsory in the arguments of app.use

// adding app.use
// with out path i.e. for all incoming requests
// app.use((req,res)=>{
//     // console.log(req);
//     // console.log(res);
//     console.log('you made a request here!');
//     res.send('<h1>Ye response aaya h!!</h1>');
// })

// with path i.e. only for that speciifc path only not in other cases(we cannot give two paths here)
app.use('/middleware',(req,res)=>{
    console.log('you made a request at specific path middleware!');
    res.send('<h1>All Okay h sb!!</h1>');
})



app.listen(8080,()=>{
    console.log("Server running on port 8080");
})


// server hamari request or response store krke rkhta h
// and request and response both are in the object form

// res.send kaam h response bhejne m it can send the response in the form of buffer, json, html etc.

// routing:-
// 
