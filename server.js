const express = require('express');
const bodyParser = require('body-parser');
const users = require('./models/users.json');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

// SET THE VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// ROUTE HANDLING
app.get('/', (req, res) => {
    res.render('login', { error: req.query.error });
});

app.post('/', (req, res) => {
    res.redirect(`/list`);
});

app.get('/list', (req, res) => {
    const itemsToDisplay = 15;
    const page = parseInt(req.query?.page) || 1;
    const start = page === 1 ? 0 : (page - 1) * itemsToDisplay - 1;
    const end = start + itemsToDisplay;
    const paginatedUsers = users.slice(start, end);

    res.render('list', {
        title: 'list',
        users: paginatedUsers,
        itemsToDisplay,
        page,
        start,
        end,
    });
});

app.get('/detail/:id', (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    res.render('detail', { user });
});

// LISTEN FOR REQUESTS
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
