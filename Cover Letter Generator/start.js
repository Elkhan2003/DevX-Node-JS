const express = require('express'); // import the Express.js library
const app = express(); // create an instance of the Express application
const port = 3000; // define the port number to listen on

app.get('/', (req, res) => { // define a route handler for the root path
  res.send('Hello, world!'); // send a response to the client
});

app.listen(port, () => { // start the server and listen for incoming requests
  console.log(`Server listening on port ${port}`);
});