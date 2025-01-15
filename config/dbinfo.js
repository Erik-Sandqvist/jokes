// Database configuration
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'mysql12523.mysql.database.azure.com',
  user: 'postgres',
  password: '#44',
  database: 'jokesdb'
});

db.connect((error) => {
  if (error) {
    console.error('Database connection error:', error);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;