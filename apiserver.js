const express = require('express');
const createConnection = require('./config/dbinfo'); // Import the createConnection function
const router = express.Router();

// Create a joke
router.post('/jokes', (req, res) => {
    let joke = req.body;
    let sql = 'INSERT INTO jokes (question, answer, rating) VALUES (?, ?, ?)';
    let values = [joke.question, joke.answer, joke.rating];
    const db = createConnection(); // Create a connection to the database
    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.send('Joke has been added...');
    });
});

// All jokes
router.get('/jokes', (req, res) => {
    let sql = 'SELECT * FROM jokes';
    const db = createConnection(); // Create a connection to the database
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// A single joke
router.get('/jokes/:id', (req, res) => {
    let sql = `SELECT * FROM jokes WHERE id=${req.params.id}`;
    const db = createConnection(); // Create a connection to the database
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// A random joke
router.get('/jokes/random', (req, res) => {
    let sql = 'SELECT * FROM jokes ORDER BY RAND() LIMIT 1';
    const db = createConnection(); // Create a connection to the database
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Update a joke
router.put('/jokes/:id', (req, res) => {
    let joke = req.body;
    let sql = `UPDATE jokes SET question='${joke.question}', answer='${joke.answer}', rating=${joke.rating} WHERE id=${req.params.id}`;
    const db = createConnection(); // Create a connection to the database
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Joke updated...');
    });
});

// Delete a joke
router.delete('/jokes/:id', (req, res) => {
    let sql = `DELETE FROM jokes WHERE id=${req.params.id}`;
    const db = createConnection(); // Create a connection to the database
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Joke deleted...');
    });
});

module.exports = router;