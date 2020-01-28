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
        log.log('read comment');
        db.comments.all(req.params.postId)
            .then(data => {
                // if (!data) {
                //     next();
                //     return;
                // }
                log.log('returning', data);
                res.send(data);
            })
            .catch((error) => {
                log.error(error);
                next(error);
            });
    }
}