const express = require('express');
const router = express.Router();

const {
createCourse,
getAllCourses,
getCourseById,
updateCourse,
deleteCourse
} = require('../controllers/coursecontroller');

router.post('/createcourse',createCourse);

router.get('/getallcourses',getAllCourses);

router.get('/getcourse/:id',getCourseById);

router.put('/updcourse/:id',updateCourse);

router.delete('/delcourse/:id',deleteCourse);

module.exports = router;