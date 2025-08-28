// app.js - Day 5 Project

const express = require('express');
const cors = require('cors'); // 1. Import cors

const app = express();
const PORT = 3000;

// 2. Use the cors middleware
// This will allow requests from any origin
app.use(cors());

const students = [
    { id: 1, name: 'Ashish Sharma', team: 'Code Storm' },
    { id: 2, name: 'Anjali Kushwaha', team: 'Code Storm' },
    { id: 3, name: 'Preeti Khachne', team: 'Code Storm' }
];

app.get('/', (req, res) => {
    res.send('Welcome to my Student API using Express!');
});

app.get('/api/students', (req, res) => {
    res.json(students);
});

app.post('/api/students', (req, res) => {
    res.send('Student added successfully! (This is a simulation)');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});