const http = require('http'); // Importing the http module
require('dotenv').config(); // Importing and configuring dotenv for environment variables

const app = require('./CheeseMath/app'); // Importing the express app

// Set a default port in case the environment variable isn't set
const PORT = process.env.PORT || 3000;

// Creating and starting the HTTP server
http.createServer(app).listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Logging server start message
});