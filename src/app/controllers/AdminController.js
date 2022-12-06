const mongoose = require('../../until/mongoose')
const {mutipleMongooseObjectToObject, mongooseObjectToObject} = require('../../until/mongoose')
const Courses =  require('../models/courses')


class AdminController {
  show(req, res, next){
    
   
    Courses.find({})
        .then(courses => {
            res.render('admin/admin', {courses: mutipleMongooseObjectToObject(courses)})
            
        })
        .catch(err => next(err))
    

  }
  edit(req, res, next){
      Courses.findById(req.params.id)
        .then(course => {
          res.render('admin/edit', {course: mongooseObjectToObject(course)})
        })
        .catch(err => console.log('asdasd'))
  }
  update(req, res, next){
    Courses.updateOne({_id: req.params.id}, req.body)
      .then(() => res.redirect('/admin/stored/courses'))
      .catch(err => next(err))
}
remove(req, res, next){
    Courses.deleteOne({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(err => next(err))
}


  


  
}

module.exports = new AdminController();
