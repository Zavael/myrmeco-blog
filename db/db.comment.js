module.exports = function (db, log) {
    return {
        allForPost: postId => {
            log.log('read comments for post_id [%s]', postId);
            return db.all('SELECT * FROM comments WHERE post_id = $1', id);
        },
        add: comment => {
            log.log('insert comment', comment);
            // return db.none({
            //     text: 'INSERT INTO comment(login, password) VALUES($1,$2)',
            //     values: [comment.login, comment.password]
            // });
        }
    };
}