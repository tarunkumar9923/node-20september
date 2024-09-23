const Student = require('../models/Students');
async function addStudent(req,res){
    try{
        console.log(req.body);
       let student = new Student(req.body);
       await student.save();
    //    res.render('dataaddedresponse');
    res.render('studentinsert');

    }catch(err){
        console.error(err);
    }
}
async function getStudents(req,res){
    try{
       
       let students = await Student.find({});
    //    res.send(students)
    res.render('studentlist',{
        students:students

    })


    }catch(err){
        console.error(err);
    }
}
module.exports={
    addStudent ,getStudents
}