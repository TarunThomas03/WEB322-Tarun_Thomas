const users = require('../models/fakeUsers.json');

const authenticate = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Authentication successful
    res.json({ isAuthenticated: true, userId: user.id });
  } else {
    // Authentication failed
    res.status(401).json({ isAuthenticated: false, message: 'Invalid' });
  }

  // Redirect logic outside the if-else block to avoid redundancy
  res.redirect(user ? '/list' : '/login?error=1');
};

module.exports = { authenticate };
