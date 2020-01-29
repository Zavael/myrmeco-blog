module.exports = function (db, log) {
    return {
        one: id => {
            log.log('read post [%s]', id);
            return db.oneOrNone('SELECT * FROM posts WHERE id = $1', id);
        },
        add: post => {
            log.log('insert post', post);
            // return db.none({
            //     text: 'INSERT INTO post(login, password) VALUES($1,$2)',
            //     values: [post.login, post.password]
            // });
        },
        all: () => {
            log.log('read all posts');
            return db.any('SELECT * FROM posts');
        }
    };
}