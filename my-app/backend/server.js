const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to SQLite3 database:' + err.message);
    } else {
        console.log('Connected to SQLite3 database.');
    }
});

db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL
    )`
  );


  app.post('/api/submit', (req, res) => {
    const { name, email } = req.body;
    const query = `INSERT INTO users (name, email) VALUES (?, ?)`;
    db.run(query, [name, email], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(200).json({ message: 'Data inserted successfully', id: this.lastID });
      }
    });
  });


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });