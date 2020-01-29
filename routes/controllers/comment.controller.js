var db = require('../../db/db');
const log = require('../../logging.handler')('CommentController');

module.exports = {
    create: function (req, res, next) {
        log.log('create comment');
        db.comments.add(req.body)
            .then(() => {
                res.status(201);
            })
            .catch((error) => {
                log.error('Error occured', error);
                next(error);
            });
    },
    readAllForPost: function (req, res, next) {
        log.log('read comments for post', req.params);
        db.posts.one(req.params.postId)
            .then(post => {
                if (!post) {
                    next();
                    return;
                }
                db.comments.allForPost(req.params.postId)
                    .then(comments => {
                        if (!comments) {
                            next();
                            return;
                        }
                        log.log('returning', comments);
                        res.send(comments);
                    })
                    .catch((error) => {
                        log.error(error);
                        next(error);
                    });
            })
    }
}