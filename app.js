var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var courseRouter = require('./routes/course');
var listRouter = require('./routes/listings');

var app = express();
app.use(express.json());

const mongoose = require('mongoose').set('debug', true);
const dotenv = require('dotenv');
dotenv.config();


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




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', listRouter);
app.use('/', usersRouter);
app.use('/', courseRouter);


// catch 404 and forward to error handler
app.use( (req, res, next) => {
    next(createError(404));
});

console.log("MongoURI to be connected....",process.env.MONGO_URI)
console.log("")




// error handler
app.use( (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
