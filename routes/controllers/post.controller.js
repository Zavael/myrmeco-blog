var db = require('../../db/db');
const log = require('../../logging.handler')('PostController');

module.exports = {
    create: function (req, res, next) {
        log.log('create post');
        db.posts.add(req.body)
            .then(() => {
                res.status(201);
            })
            .catch((error) => {
                log.error('Error occured', error);
                next(error);
            });
    },
    read: function (req, res, next) {
        log.log('read post', req.params);
        db.posts.one(req.params.postId)
            .then(post => {
                if (!post) {
                    next();
                    return;
                }
                log.log('returning', post);
                res.send(post);
            })
            .catch((error) => {
                log.error(error);
                next(error);
            });
    },
    readAll: function (req, res, next) {
        log.log('read all posts');
        db.posts.all()
            .then((data) => {
                log.log('returning', data);
                res.send(data);
            })
            .catch((error) => {
                log.error('Error occured', error);
                next(error);
            });
    }
}