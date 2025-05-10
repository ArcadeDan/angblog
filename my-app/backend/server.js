const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

//port normalization
const normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
const port = normalizePort(process.env.PORT || '3000');

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


// init database
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


  // create

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


  // retrieve all users
  // This endpoint retrieves all users from the database
  // and returns them as a JSON response.
  app.get('/api/users', (req, res) => {
    const query = `SELECT * FROM users`;
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error('Error fetching data:', err.message);
        res.status(500).json({ error: err.message });
      } else {
        res.status(200).json(rows); // Return all rows as JSON
      }
    });
  });


  // retrieve a single user
  // This endpoint retrieves a single user from the database
  // based on the provided ID in the URL parameter.
  app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM users WHERE id = ?`;
    db.get(query, [id], (err, row) => {
      if (err) {
        console.error('Error fetching user:', err.message);
        res.status(500).json({ error: err.message });
      } else if (!row) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json(row); // Return the user as JSON
      }
    });
  });



  // update by user name and or email
  app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = `UPDATE users SET name = ?, email = ? WHERE id = ?`;
    db.run(query, [name, email, id], function (err) {
      if (err) {
        console.error('Error updating user:', err.message);
        res.status(500).json({ error: err.message });
      } else if (this.changes === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json({ message: 'User updated successfully' });
      }
    });
  });

  app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM users WHERE id = ?`;
    db.run(query, [id], function (err) {
      if (err) {
        console.error('Error deleting user:', err.message);
        res.status(500).json({ error: err.message });
      } else if (this.changes === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json({ message: 'User deleted successfully' });
      }
    });
  });

  const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });


  // listeners

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use.`);
    } else if (err.code === 'EACCES') {
        console.error(`Permission denied for port ${port}.`);
    }
    else {
        console.error(`Server error: ${err.message}`);
    }
    process.exit(1);
  });
  