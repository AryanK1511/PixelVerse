const express = require('express');

const app = express();

// health route
app.get('/health', (req, res) => {
    res.send('Hello, world!');
});


// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});