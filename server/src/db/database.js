const mysql = require('mysql2');

const uri = 'mysql://u3nhojkyfzisauwr:nhtMziGpaFlvqnK9yV7s@b2dql3cn1qsogappkey0-mysql.services.clever-cloud.com:3306/b2dql3cn1qsogappkey0'

 const connection = mysql.createConnection({
   uri: uri
})

let pool = mysql.createPool(uri);

pool.on('connection', function (_conn) {
    if (_conn) {
        logger.info('Connected the database via threadId %d!!', _conn.threadId);
        _conn.query('SET SESSION auto_increment_increment=1');
    }
});


module.exports = connection