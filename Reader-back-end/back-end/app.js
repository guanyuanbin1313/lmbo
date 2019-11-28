var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var userLogin = require('./routes/userLogin.js');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require("cors");
var testApiRouter = require("./routes/testApi.js");
var app = express();
var upload  = require('./routes/upload.js');
var userRegister = require('./routes/userRegister.js');
var adminLogin = require('./routes/adminLogin.js');

// view engine setup
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', [
    'GET','POST','PUT','DELETE','OPTIONS'
  ]);
  next();
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/login',userLogin);
app.use('/register',userRegister);
app.use('/upload',upload);
app.use("/testApi",testApiRouter);
app.use('/admin/login',adminLogin);
app.use('/', indexRouter);
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
