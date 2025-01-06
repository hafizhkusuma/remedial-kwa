const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

// GET endpoint
app.get('/data', async (req, res) => {
    const { sep1, sep2 } = req.query;
    try {
        const result = await pool.query('SELECT * FROM your_table WHERE sep1 = $1 AND sep2 = $2', [sep1, sep2]);
        res.json(result.rows[0] || {});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// POST endpoint
app.post('/data', async (req, res) => {
    const data = req.body;
    try {
        const result = await pool.query('INSERT INTO your_table (nomor_kartu, ...) VALUES ($1, ...) RETURNING *', [data.nomor_kartu, ...]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});