const express = require('express');
const route = express.Router();
const coursesController = require('../app/controllers/CoursesController');

route.get('/create',coursesController.create)
route.post('/store', coursesController.store)

route.get('/:slug', coursesController.show);

module.exports = route;
