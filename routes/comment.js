const controller = require('./controllers/comment.controller');

module.exports.attachHandlers = attachHandlers;

function attachHandlers(router) {

    router.route('/posts/:postId/comments')
        .post(controller.create)
        .get(controller.readAllForPost);
};