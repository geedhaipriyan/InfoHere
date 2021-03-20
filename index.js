const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const app = express();

const port = 8000;

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true );
// redirecting to routes
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, (err)=>{
    if(err)
    {
        console.log(`Error in running the application: ${err}`);
    }
    console.log(`server is up and running on port :${port}`);
})