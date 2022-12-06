const express = require('express');
const route = express.Router();
const adminController = require('../app/controllers/AdminController');


// dùng để truy cập vào trang chỉnh sửa
route.get('/stored/courses/:id/edit',adminController.edit)

// chức năng update
route.put('/stored/courses/:id/update',adminController.update)

// chức năng remove
route.delete('/stored/courses/:id/remove',adminController.remove)



route.get('/stored/courses',adminController.show)



module.exports = route;