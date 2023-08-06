// Imports --
const express = require('express')
const app = express()
require('dotenv').config(); // Making our code secure by not letting our user see DB Address and other sensitive informations..
require('./db/conn') // importing our DB connection File
 // Calling our userSchema for posting form data to mongodb.
const bodyParser = require('body-parser')

// parse application/x-ww-from-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse pplication/json
app.use(bodyParser.json());
app.use(require('./router/auth')); //middleware :)
const user = require('./model/userSchema')

// Variables calling from dotenv--
const port = process.env.port;




const userTypeCheck = (req, res, next) => {
    // console.log(`
    // if 
    //     User is Student Redirect it to Student Dashboard.
    // else if
    //     User is Staff Redirect it to Teacher Dashboard.
    // else if
    //     User is Admin Redirect it to Admin Dashboard.
    // else
    //     User is not found contact admin through Email: XXX.
    // `);
    console.log(`Middleware is running successfully...`)
    next();
}

app.listen(port,() => {
    console.log(`Application is running at http://localhost:${port}`);
});
