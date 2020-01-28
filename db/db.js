const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL || "postgres://zuvdpkwkwrdtks:b36e1b01e9f72e81de1c7ec294c0eaa13bf1ce534f647818e83b6423c7dbf230@ec2-79-125-25-171.eu-west-1.compute.amazonaws.com:5432/debfsm9i9rn7hn");
const log = require('../logging.handler')('PostgresDB');

db.proc('version')
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