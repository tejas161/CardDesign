const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require("path");

dotenv.config({path:'./config.env'});

require('./db/conn');
// const User = require('./model/userSchema');


app.use(express.json());

//linking the router files to make our route easy
app.use(require('./router/auth'));


const PORT = process.env.PORT || 5000;





 








// app.get('/about',middleware,(req,res) => {
//     res.send('<h2>Hello world from teja  about server</h2>');
   

// });

app.get('/contact',(req,res) => {
    res.cookie('contactcookie','done here');
    res.send('<h1>Hello world from teja contact server</h1>');
   

});

app.get('/signin',(req,res) => {
    res.send('Hello world from teja signin');

});

app.get('/signup',(req,res) => {
    res.send('Hello world from teja signup');

});

if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));

   
    app.get("/", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));

    })


}





app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})






