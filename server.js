const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware for parsing POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Set up EJS as the templating engine
app.set('view engine', 'ejs');

// Fake authentication flag
let isAuthenticated = false;

// Routes

app.get('/', (req, res) => {
    res.render('login', { error: req.query.error });
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check against hardcoded credentials
    if (username === "tarunthomas" && password === "tarunthomas") {
        isAuthenticated = true;
        res.redirect('/list');
    } else {
        res.redirect('/login?error=1');
    }
});

app.get('/list', (req, res) => {
    if (isAuthenticated) {
        // Read from the JSON file and slice the data to the first 25 rows
        const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8')).slice(0, 25);
        res.render('list', { data: data });
    } else {
        res.redirect('/login');
    }
});

app.get('/details/:id', (req, res) => {
    if (isAuthenticated) {
        const id = parseInt(req.params.id, 10);
        const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));
        const user = data.find(u => u.id === id);
        if (user) {
            res.render('details', { user: user });
        } else {
            res.status(404).send("User not found");
        }
    } else {
        res.redirect('/login');
    }
});

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
