const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Root route: redirect to login if no username is provided
router.get('/', (req, res) => {
    const username = req.query.username;
    if (!username) {
        return res.redirect('/login');
    }
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Serve contact us form
router.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'contactus.html'));
});

// Handle contact form submission
router.post('/contactus', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    // You can handle the contact details here (e.g., save them to a database)
    res.redirect('/success');
});

// Serve success page
router.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'success.html'));
});

// Handle message sending
router.post('/send', (req, res) => {
    const username = req.body.username;
    const message = req.body.message;
    const entry = `{"${username}": "${message}"},\n`;
    fs.appendFileSync('messages.txt', entry);
    res.redirect('/?username=' + username);
});

// Endpoint to read messages
router.get('/messages', (req, res) => {
    const messages = fs.readFileSync('messages.txt', 'utf8');
    res.send(messages);
});

module.exports = router;
