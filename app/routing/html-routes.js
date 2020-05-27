var path = require('path');

module.exports = function (app) {

    app.get( '/', function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    app.get('/about', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/about.html'));
    });

    app.get('/sites', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/sites.html'));
    });

    app.get('/events', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/events.html'));
    });

    app.get('/resources', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/resources.html'));
    });

    app.get('/asc', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/ascArticle.html'))
    });

    app.get('/cdp', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/cdpArticle.html'));
    });

    app.get('/cheekwood', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/cheekwoodArticle.html'));
    });

    app.get('/wave', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/waveArticle.html'));
    });

    app.get('/zoo', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/zooArticle.html'));
    });

    app.get('/transition', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/bedTransition.html'));
    });

}