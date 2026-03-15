const mongoose = require('mongoose');

const courseschema = new mongoose.Schema({

courseid:{
type:Number,
required:true,
unique:true
},

coursename:{
type:String,
required:true
},

instructor:{
type:String,
required:true
},

credits:{
type:Number,
required:true
},

department:{
type:String,
required:true
},

created_on:{
type:Date,
default:new Date()
}

});

module.exports = mongoose.model('course',courseschema);