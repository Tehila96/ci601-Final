const mysql = require('mysql2');
const credentials = {
 host: 'ts813.brighton.domains',
 user: 'ts813_user123',
 password: 'Taylor011196**',
 database: 'ts813_ci601'
};

const connection = mysql.createConnection(credentials); //connection to the database with server credentials

module.exports = {
    connection
}
