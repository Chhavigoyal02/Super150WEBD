// Q. what are static files?
// html files, css files, js files, images(.png)

// all the static files are stored in public folder(can change this folder name but its a convention)

const express = require('express');
const app = express()
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// express ko btana pdega ki hum css ke liya static files ko use kr rhe h, ab idhr humne app.use isliye kiya h kyuki ye middleware ko hum har equest pr chlana chah rhe as css or js can be used on any request
app.use(express.static(path.join(__dirname,'public')));


// root route
app.get('/',(req,res)=>{
    res.render('index');    
})


app.listen(8080,()=>{
    console.log("server running at port 8080");
})