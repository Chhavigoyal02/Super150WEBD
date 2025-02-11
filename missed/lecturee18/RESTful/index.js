// RESTful routing
// REST -> REpresentational State Transfer
// this isjusta way/architectural style(way of writing) of routes to interact with lient and server


// REST -> RESTful routing and RESTapi
// RESTful routing -> jab aap HTML, CSS, JS ye page show krte ho (jo abhi tk hum kr rhe the)
// RESTapi -> whenever you hit a url, the data you get back; it is baiscally a architecture

// redirect -->get request bhejo, jis path pr bhejna h vo tum mention krte ho
// jese koi blogging webiste h usme humara ek oage h diaply all blogs ka; ab hum koi naya blog add krre h to add krne k bad redirect ho jaaba chahiye diplay all blogs wale page pr, to behind the sccenes m ek get request jaygi to blogs page

// dummy array (alternative of DB right now)
let comments = [
    {
        id:0,
        username:"Akshay",
        comment:"kuch nhi"
    },
    {
        id:1,
        username:"Sachin",
        comment:"kaun"
    },
    {
        id:2,
        username:"Javed",
        comment:"laal h bhayi laal h"
    },
    {
        id:3,
        username:"Ojaswa",
        comment:"puls aagyi puls"
    }
]


const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));//for form encoded data    

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
    comments.push({username,comment,id:comments.length});
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


app.listen(8080,()=>{
    console.log("Server running at port 8080");
    
})