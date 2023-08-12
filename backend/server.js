// Load express
const express = require('express');

//configure app(app.set)

//mount middleware

// Create our express app
const app = express();

// Define a "root" route directly on app
// Mount routes
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

//create a new get route for our home page with a response of Hello World

app.get('/greeting/:name', function(req, res){
  res.send('<h1>Hello placeholder! It is so good to see you!</h1>')
});

app.get('/Jimmy-boy', (req, res) => {
 res.send('<h1>Hello there Jimmy-Boy!</h1>')
});


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});