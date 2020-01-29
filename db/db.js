const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);
const log = require('../logging.handler')('PostgresDB');

db.one('Select version()')
    .then(data => {
        log.log('Connected: ', data);
    })
    .catch(error => {
        log.error(error);
    });

module.exports = {
    findById: (table, id) => {
        log.log('read ', table, id);
        return db.one('Select * from ' + table + ' where id = $1', id);
    },
    posts: require('./db.post')(db, log),
    comments: require('./db.comment')(db, log)
}