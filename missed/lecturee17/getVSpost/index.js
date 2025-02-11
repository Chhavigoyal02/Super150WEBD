const express = require('express');
const app = express()
const path = require('path')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));//templating fles
app.use(express.static(path.join(__dirname,'public')))//static files

app.use(express.urlencoded({extended:true}))//it is a middleware to get the form data
app.use(express.json())//it is a middleware for json     data

app.get('/',(req,res)=>{
    res.render('index');
})

// to handle get request
app.get('/user',(req,res)=>{
    // console.log(req.query);
    let {userName,age} = req.query;
    res.send('get request sent successfully!');
})

// to handle post request
app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send('post method request sent successfully!')
})



app.listen(8080,()=>{
    console.log("server running at port 8080");
})


