const Course = require('../models/course');

exports.createCourse = async(req,res)=>{

try{

const {courseid,coursename,instructor,credits,department} = req.body;

const exists = await Course.findOne({courseid});

if(exists){
return res.status(400).json({
success:false,
message:"Course ID already exists"
});
}

const result = await Course.create({
courseid,
coursename,
instructor,
credits,
department
});

res.status(200).json({
success:true,
course:result
});

}catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

};

// Get all courses
exports.getAllCourses = async(req,res)=>{

try{

const courses = await Course.find();

res.status(200).json({
success:true,
courses
});

}catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

};

// Get course by ID
exports.getCourseById = async(req,res)=>{

try{

const course = await Course.findOne({courseid:req.params.id});

res.status(200).json({
success:true,
course
});

}catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

};

// Update course
exports.updateCourse = async(req,res)=>{

try{

await Course.updateOne(
{courseid:req.params.id},
{$set:req.body}
);

res.status(200).json({
success:true,
message:"Course updated successfully"
});

}catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

};

// Delete course
exports.deleteCourse = async(req,res)=>{

try{

await Course.findOneAndDelete({courseid:req.params.id});

res.status(200).json({
success:true,
message:"Course deleted successfully"
});

}catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

};