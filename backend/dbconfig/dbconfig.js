const mongoose = require('mongoose');
require('dotenv').config();

exports.dbconnect = () => {

mongoose.connect(process.env.dburl)

.then(()=>{
console.log("MongoDB connection successful");
})

.catch((error)=>{
console.log("Error connecting to database");
console.error(error.message);
process.exit(1);
});

};