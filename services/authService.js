const users = require('../models/users.json');

const authenticate = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({
            isAuthenticated: true,
            userId: user.id,
            redirectUrl: '/list' 
        });
    } else {
        res.status(401).json({ isAuthenticated: false, message: 'Invalid credential', redirectUrl: '/login?error=1' });
    }
};

module.exports = { authenticate };
