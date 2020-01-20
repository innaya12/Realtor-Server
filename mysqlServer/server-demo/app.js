var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/indexRoute');
var addapartmentRouter = require('./routes/addApartmentRouter');
var apartmentsRouter = require('./routes/getApartmentsRoute');
var citiesRouter = require('./routes/getCitiesRoute');
var countriesRouter = require('./routes/getCountriesRoute');
var getImagesRouter = require('./routes/getImagesRoute');
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
app.use('/addapartment', addapartmentRouter);
app.use('/apartments',(req, res, next) => {
    res.cookie('my-cookie', JSON.stringify({userId: 1234, role:'user'}), {maxAge: -1});
    next();
}, apartmentsRouter);
app.use('/cities', citiesRouter);
app.use('/countries', countriesRouter);

app.use('/images', getImagesRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

module.exports = app;







// var usersRouter = require('./routes/usersExample');
// var ordersRouter = require('./routes/ordersExample').router;

// app.use('/users', usersRouter);
// app.use('/orders', ordersRouter);