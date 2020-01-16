var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/indexRoute');
var usersRouter = require('./routes/usersExample');
var apartmentsRouter = require('./routes/apartmentsRoute');
var loginRouter = require('./routes/loginRoute');
var imagesRouter = require('./routes/imagesRoute')
var app = express();
var ordersRouter = require('./routes/ordersExample').router;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/images', imagesRouter);


app.use('/apartments',(req, res, next) => {
    res.cookie('my-cookie', JSON.stringify({userId: 1234, role:'user'}), {maxAge: 1000 *60 *60 *24});
    next();
}, apartmentsRouter);
// app.use('/orders', ordersRouter);


module.exports = app;
