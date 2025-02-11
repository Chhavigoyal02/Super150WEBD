// express is a framework which used to create a web server


const express = require('express');//whenever you require a express it returns a function
const app = express();//it returns an enitre new object(so app is object,app is instance to your entire application)

// console.log(app);


// ask server to listen 
app.listen(8080,() => {console.log('Server running on port 8080');
})

