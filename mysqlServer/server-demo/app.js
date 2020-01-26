var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/indexRoute');
var apartmentsRouter = require('./routes/apartmentsRoute');
var addapartmentRouter = require('./routes/addapartmentRouter')
var citiesRouter = require('./routes/citiesRoute');
var countriesRouter = require('./routes/countriesRoute');
var getImagesRouter = require('./routes/imagesRoute');
var uploadimagesRouter = require('./routes/uploadimagesRouter');
var loginRouter = require('./routes/loginRouter');
var signupRouter = require('./routes/signupRouter');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors());
app.use(cors({origin:'http://localhost:3000', credentials: true}));

app.use('/', indexRouter);
app.use('/apartments', apartmentsRouter);
app.use('/addapartment', addapartmentRouter);
app.use('/cities', citiesRouter);
app.use('/countries', countriesRouter);
app.use('/images', getImagesRouter);
app.use('/uploadimages', uploadimagesRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

// app.use('/apartments',(req, res, next) => {
//     res.cookie('my-cookie', JSON.stringify({userId: 1234, role:'user'}), {maxAge: -1});
//     next();
// }, apartmentsRouter);

module.exports = app;







// var usersRouter = require('./routes/usersExample');
// var ordersRouter = require('./routes/ordersExample').router;

// app.use('/users', usersRouter);
// app.use('/orders', ordersRouter);