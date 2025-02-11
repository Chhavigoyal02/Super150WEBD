const express = require('express');
const app = express();

// Get

// DEFAULT METHOD IS get
// slash is default path ; / ko hum root bhi kehte h
app.get('/',(req,res)=>{
    res.send('<h3>ye mera slash path h</h3>')
})
app.get('/cat',(req,res)=>{
    res.send('<h3>ye mera cat path h</h3>')
})
app.get('/dog',(req,res)=>{
    res.send('<h3>ye mera dog path h</h3>')
})

// handling bad requests(always at lastt)
app.get('*',(req,res)=>{
    res.send("you are sending bad requests!");
})




app.listen(8080,()=>{
    console.log("Server running on port 8080");
})


// baar baar server refresh krna pd rha h abhi so uska solution h "Nodemon" its a npm package which we have to install by npm i nodemon
// after installing it in package.json in scipts we have to add ("start" : "nodemon ./index.js")
// and now to run the server we can write npm start instead of node index.js