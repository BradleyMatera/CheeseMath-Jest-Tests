const http = require('http'); // Importing http module
require('dotenv').config(); // Importing and configuring dotenv for environment variables

const app = require('./app/app'); // Importing the express app

// Creating and starting the HTTP server
http.createServer(app)
    .listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`); // Logging server start message
    });