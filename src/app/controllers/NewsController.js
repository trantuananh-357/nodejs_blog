
class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('test');
    }
}

module.exports = new NewsController();
