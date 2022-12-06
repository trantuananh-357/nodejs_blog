const posts = require('../models/courses')
const {mutipleMongooseObjectToObject}  = require('../../until/mongoose')
class SiteController {
    home(req, res, next) {
       

        posts.find({})
            .then(posts => {
                res.render('home',{posts: mutipleMongooseObjectToObject(posts) })
               
            })
            .catch(err => next(err))
        
    }

    search(req, res) {
        res.render('search');
    }
}
posts
module.exports = new SiteController();
