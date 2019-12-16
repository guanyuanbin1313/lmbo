var createError = require('http-errors');
var express = require('express');
var path = require('path');
var ejs = require('ejs');
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
var getDetail = require('./routes/getdetail.js');
var getBooksList = require('./routes/getBookList.js');
<<<<<<< HEAD
var commit = require('./routes/commit.js');
=======
var adduser=require("./routes/adduser.js");
>>>>>>> 10b160af73e7aae8d3e59c5bdfe7b51dc434166d

app.disable('etag');
// view engine setup
app.all('*', function (req, res, next) {
//响应头指定了该响应的资源是否被允许与给定的origin共享。*表示所有域都可以访问，同时可以将*改为指定的url，表示只有指定的url可以访问到资源
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //允许请求资源的方式
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Cache-Control", "no-store");
  next();
});




app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', [
    'GET','POST','PUT','DELETE','OPTIONS'
  ]);
  next();
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/login',userLogin);
app.use('/register',userRegister);
app.use('/upload',upload);
app.use("/testApi",testApiRouter);
app.use('/admin',adminLogin);
app.use('/', indexRouter);
app.use('/getdetail',getDetail);
app.use('/users', usersRouter);
app.use('/getbookslist',getBooksList);
<<<<<<< HEAD
app.use('/commit',commit);

=======
app.use('/adduser',adduser);//用户管理
>>>>>>> 10b160af73e7aae8d3e59c5bdfe7b51dc434166d
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
