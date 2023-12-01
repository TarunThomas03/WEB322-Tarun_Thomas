const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000; // Use the PORT from environment or default to 3000

app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Import API router
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

// SET THE VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// ROUTE HANDLING
app.get("/", (req, res) => {
  res.render('login', { error: req.query.error });
});

app.post("/", (req, res) => {
  res.redirect(`/list`);
});

app.get("/list", (req, res) => {
  const itemsToDisplay = 15;
  const page = parseInt(req.query?.page) || 1;
  const start = (page === 1) ? 0 : (page - 1) * itemsToDisplay - 1;
  const end = start + itemsToDisplay;
  const filteredUsers = users.slice(start + 1, end + 1); // Adjusted array slicing

  res.render("list", {
    title: "list",
    users: filteredUsers,
    itemsToDisplay,
    page,
    start,
    end,
  });
});

app.get("/detail/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.render("detail", { user });
});

// LISTEN FOR REQUESTS!!!!
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
