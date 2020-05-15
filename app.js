const express = require('express');
const path = require('path');
//const generatePassword = require('password-generator');

const app = express();

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const cors = require('cors');


const morgan = require('morgan');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

var courseRouter = require('./routes/course');


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));


// mongo DB
mongoose.connect(
  process.env.MONGO_URI, 
  { 
      useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useFindAndModify: false 
  }
)
.then( () => console.log("mongoDB Successfully connected") )

mongoose.connection.on("error", err => {
console.log(`mongoDB connection error: ${err.message}`)
});

app.use( morgan("dev") );
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(expressValidator())

app.use(cors())  



app.use('/', courseRouter);


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Access MongoDB server ---  listening on ${port}`);
