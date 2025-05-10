const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


const dbPath = path.resolve(__dirname, 'database.db'); // Adjust the path as necessary for concurrent
const db = new sqlite3.Database(dbPath, (err) => {
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
    )`,
    (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Users table created or already exists.');
        }
    }
  );


  app.post('/api/submit', (req, res) => {
    const { name, email } = req.body;
    console.log('Received data:', { name, email }); // Log received data
    const query = `INSERT INTO users (name, email) VALUES (?, ?)`;
    db.run(query, [name, email], function (err) {
      if (err) {
        console.error('Error inserting data:', err.message); // Log error
        res.status(500).json({ error: err.message });
      } else {
        console.log('Data inserted successfully:', { id: this.lastID }); // Log success
        res.status(200).json({ message: 'Data inserted successfully', id: this.lastID });
      }
    });
  });


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });