
const express = require('express');
const app = express();
const path = require('path');


app.set('view engine','ejs');//view engine ko ejs set kr diya h taaki templates dekh paao
app.set('views',path.join(__dirname, 'views'));

// Now whatever number of templates we have created, all the files will be made inside a folder namely views
// and in this folder all the files will be having the extension "ejs".

const todo =[ 'go to gym','go to club','drink water'];

// root route
app.get('/',(req,res)=>{
    // res.send('HI');
    res.render('index');
})

// random file route
app.get('/random',(req,res)=>{
    let number = Math.floor(Math.random() * 100)
    res.render('random',{number});
})

// show your task
app.get('/todo',(req,res)=>{
    res.render('todo',{todo});
})

app.listen(8080,()=>{
    console.log("Server running on port 8080");
})

// you will write least possible js logic in your ejs file(minimum) qki ejs ka kaam h template ko show krna; it is not a good practice
// logic issi file me likh denge or fir ans ko template ke andar bhj denge