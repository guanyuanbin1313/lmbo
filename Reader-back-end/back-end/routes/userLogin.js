var express = require('express');
var router = express.Router();
var encrypt = require('../common/encrypt.js');
var connection = require('../common/sqlConnection.js');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser('zstd'));

app.set('trust proxy',1);
app.use(session({
  secret:'zstd',
  resave:true,
  saveUninitialized:false,
  cookie:{maxAge:1000*60*30}
}))

router.post('/',function(req,res,next) {
    console.log(req.body);
    console.log('testing',req.session.userInfo);
    var username = req.body.username;
    var password = req.body.password;
    password = encrypt.aseEncode(password,'zstd');
    console.log(password);
    var query1 = "select * from user where username='" + username +"' and password='" + password + "'";
    connection.query(query1,function(err,result) {
      console.log("result!!!!"+result);
      console.log("error!!!!"+err);
      if(result.length == 0) {
        // res.setHeader('Content-Type','text/html;charset=utf-8');
        console.log("登录失败")
        res.send("登录失败");
      }
      else {
        let data = {};
        data.username = username;
        req.session.userInfo = data;
        console.log(req.session.userInfo);
        console.log("登录成功");
        // req.session.userInfo = data;
        res.send('登录成功');
      }
    })
})

router.get('/info',function(req,res) {
  if(req.session.userInfo) {
    res.send("登录成功"+req.session.userInfo);
  }
  else {
    res.send("登录失败+"+req.session.userInfo);
  }
})





module.exports = router;
// module.exports = app;
