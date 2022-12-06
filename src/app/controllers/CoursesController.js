const mongoose = require('../../until/mongoose')
const {mongooseObjectToObject} = require('../../until/mongoose')
const Courses =  require('../models/courses')
class CoursesController {
    show(req, res, next ){
        Courses.findOne({slug: req.params.slug})
        .then(course => {
            res.render('courses/showDetail', {course: mongooseObjectToObject(course)})
            console.log(req.params)
            
        })
        .catch(err => next(err))
    }
    create(req, res, next){
        res.render('courses/create')

    }

    store(req, res, next){
        
            const course = new Courses(req.body)
            course.save()
            .then(() => res.redirect('/'))
            .catch(
                (err) =>{ 
                    console.log(err)
                }
            )
        

           
       
    }
    
}

module.exports = new CoursesController();
