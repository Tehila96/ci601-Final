const mysql = require('mysql/promise');
const credentials = {
    host: 'ts813.brighton.domains',
    user: 'ts813_user123',
    password: 'Taylor011196**',
    database: 'ts813_ci601'
};

async function query(sql, params) {
    const connection = await mysql.createConnection(credentials);
    const [results, ] = await connection.execute(sql, params);
    return results;
}
module.exports = {
     query 
};
