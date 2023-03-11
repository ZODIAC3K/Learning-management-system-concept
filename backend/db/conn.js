// Imports --
const mongoose = require('mongoose')


// Variables calling from dotenv--
const DB = process.env.Database_Address;


// Data Base Connection --
mongoose.connect(DB).then(()=>{
    console.log(`Connection Established Successfully...`);
}).catch((err) => {
    res.status(500);
    console.log(err,`-- Connection Not Established...`);
});