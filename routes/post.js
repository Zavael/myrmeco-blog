const controller = require('./controllers/post.controller');

module.exports.attachHandlers = attachHandlers;

function attachHandlers(router) {

    router.route('/posts')
        .post(controller.create)
        .get(controller.readAll);

    router.route('/posts/:postId')
        .get(controller.read);
};