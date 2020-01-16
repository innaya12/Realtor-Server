var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apartmentsRouter = require('./routes/apartmentsRoute');
var loginRouter = require('./routes/login');
var app = express();
// var ordersRouter = require('./routes/orders').router;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.use('/apartments',(req, res, next) => {
    res.cookie('my-cookie', JSON.stringify({userId: 1234, role:'user'}), {maxAge: 1000 *60 *60 *24});
    next();
}, apartmentsRouter);
// app.use('/orders', ordersRouter);


module.exports = app;
