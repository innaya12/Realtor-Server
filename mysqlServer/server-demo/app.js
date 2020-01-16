var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/indexRoute');
var apartmentsRouter = require('./routes/apartmentsRoute');
var usersRouter = require('./routes/usersRouter');
var imagesRouter = require('./routes/imagesRoute')
var app = express();
// var usersRouter = require('./routes/usersExample');
// var ordersRouter = require('./routes/ordersExample').router;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// app.use(cors({credentials: true, origin:'http://localhost:3000'}));

app.use('/', indexRouter);
app.use('/login', usersRouter);
app.use('/images', imagesRouter);


app.use('/apartments',(req, res, next) => {
    res.cookie('my-cookie', JSON.stringify({userId: 1234, role:'user'}), {maxAge: 1000 *60 *60 *24});
    next();
}, apartmentsRouter);

// app.use('/users', usersRouter);
// app.use('/orders', ordersRouter);

module.exports = app;
