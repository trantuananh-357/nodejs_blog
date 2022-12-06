const newsRouter = require('./news');
const siteRouter = require('./site');
const courses = require('./courses')
const admin = require('./admin')
function route(app) {

    //chú ý việc sắp xếp các routes, các path chạy từ ngaoif vào trong'!
    app.use('/news', newsRouter);
    app.use('/admin', admin)
    app.use('/courses', courses)
    app.use('/', siteRouter);

    app.post('/search', (req, res) => {
        console.log(req.body);
        res.send('   ');
    });
}

module.exports = route;
