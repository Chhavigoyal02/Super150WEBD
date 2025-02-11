const express =require('express');
const app = express();


// app.get('/',(req,res)=>{
//     res.send('<h1>root route h</h1>')
// })
// app.get('/r/banana',(req,res)=>{
//     res.send('<h1>banana route h!</h1>')
// })
// app.get('/r/orange',(req,res)=>{
//     res.send('<h1>orange route h!</h1>')
// })
// app.get('/r/cat',(req,res)=>{
//     res.send('<h1>cat route h!</h1>')
// })
// app.get('/r/dog',(req,res)=>{
//     res.send('<h1>dog route h!</h1>')
// })
// ........aise to infinite routes banane pd jayenge!!??
// for this we have a solution

// req object have two paramters: - path and query (these both are also objects)
// we will use path for getting subreddit(path me jo : ke baad hoga whi chahiye muje as a mera subreddit)
// path parameter is got by params in req object

app.get('/r/:subreddit',(req,res)=>{
    console.log(req.params);
    let {subreddit} = req.params;//object destructure
    res.send(`<h1>My route was ${subreddit}</h1>`);
})

app.listen(8080,()=>{
    console.log("Server running on port 8080");  
})