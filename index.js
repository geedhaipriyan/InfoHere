const express = require('express');

const app = express();

const port = 8000;

// redirecting to routes
app.use('/', require('./routes'));


app.listen(port, (err)=>{
    if(err)
    {
        console.log(`Error in running the application: ${err}`);
    }
    console.log(`server is up and running on port :${port}`);
})