const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

// Serve login form
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));

});

router.get('/', (req, res) => {
    const username = req.query.username;
    if (!username) {
        return res.redirect('/login');
    }
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Handle login and redirect to chat
router.post('/login', (req, res) => {
    const username = req.body.username;
    res.redirect('/?username=' + username);
});

module.exports = router;




/* 
// Serve login form
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// Handle login and redirect to chat
app.post('/login', (req, res) => {
    const username = req.body.username;
    res.redirect('/?username=' + username);
});
*/