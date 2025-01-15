const mysql = requrw('mysql');

const db = mysql.createConnection({
    host: 'mysqldb1.mysql.database.azure.com',
    user: 'mydbadmin',
    password: 'password', //for now since it is not in pruduction
    database: 'jokesdb'
});

db.connect((err) => {
    if (err) {
       console.log('Error connecting to database'), error;
    } else {
    console.log('Connected to database');
}
});

module.exports = db;