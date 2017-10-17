//bring in all the modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database');

//connect to mongoose/mongodb module
mongoose.connect(config.database);

//On connnection
mongoose.connection.on('connected', () => {
    console.log('connected to database '+config.database)
});

//On error
mongoose.connection.on('error', (err) => {
    console.log('database error '+err)
});

//initialize app express variable
const app = express();

//set user routes
const users = require('./routes/users');
const locations = require('./routes/locations');

//port number
//dev port: 3000
const port = 3000;
//deployment
//const port = process.env.PORT || 8080;


//calling cors middleware allows http request from another domain name
app.use(cors());

//set static folder for Angular App
app.use(express.static(path.join(__dirname, 'public')));

//bodyParser middleware parses incoming request forms
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/users', users);
app.use('/locations', locations)

//Index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

//start server
app.listen(port, () => {
    console.log('Server started on port '+port);
});
