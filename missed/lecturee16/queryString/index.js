const express = require('express');
const app = express()

app.get('/search',(req,res)=>{
    console.log(req.query); 
    console.log(req.query.search); //key
    let {search} = req.query;//destructure
    console.log(search);
    // res.send(search);
    // res.send(req.query);
    res.send(req.query.search);
})



app.listen(8080,()=>{
    console.log("Server running on port 8080");
})


// templating means 1 route 1 page (only data will change) ---> use the same structure
// view --> template / structure(shown via help of tempaltng engines / languages)
// dfiferent types of templating engine:- HBS(handlebars),jade,nujucks,pug,ejs(embedded javascript)
// we are gonna use ejs (embeddded javascript)

// Tags in ejs:-
// 1. <%     %> --> control flow btaata h; jb use krte h jb humein loop lgana ho or if else kyuki vo to html m nhi hota; control flow iske pass rhega mtlb loop if else ko EXECUTE krega
// 2. <%=    %> --> ab ye evaluate krega mtlb output dega