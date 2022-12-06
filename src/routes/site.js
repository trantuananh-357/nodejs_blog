const express = require('express');
const route = express.Router();
const SiteController = require('../app/controllers/SiteController');

route.get('/search', SiteController.search);
route.get('/', SiteController.home);

module.exports = route;
