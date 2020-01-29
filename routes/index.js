module.exports.attachHandlers = function (server) {

    require('./post').attachHandlers(server);
    require('./comment').attachHandlers(server);
    // require('./transfer').attachHandlers(server);
    // require('./task').attachHandlers(server);
    // require('./inspection').attachHandlers(server);

    server.route('/')
        .get(function (req, res) {
            res.render('index', { title: 'Home' });
        });
};