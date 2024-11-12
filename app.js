// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an Express application
const app = express();

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for handling form submissions (already in your app.js)
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Form data received:', formData);
    res.json({ success: true, message: 'Form submission received!' });
});

// Serve the main index.html file at the root URL (already in your app.js)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Add new routes for additional pages
app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
