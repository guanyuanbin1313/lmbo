var express = require('express');
var router = express.Router();
var encrypt = require('../common/encrypt.js');
var connection = require('../common/sqlConnection.js');
var session = require('express-session');
// var connection = mysql.createConnection({
//   host:'127.0.0.1',
//   port:'3306',
//   user:'root',
//   password:'',
//   database:'user'
// });



router.post('/token',function(req,res,next) {
  console.log(req.body.token,"rest");
  var token = req.rody.token;
  var tokenDecode = encrypt.aseDecode(token,'zstd');
  

  res.send("收到");

})

router.post('/token',function(req,res,next) {
  var token = req.body.token;
  console.log(token);
})


router.post('/',function(req,res,next) {
  console.log(req.body);
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
        res.send({
          token:none,
          status:'失败'
        });
      }
      else {
        // res.setHeader('Content-Type','text/html;charset=utf-8');
        var data = new Date();
        var timeStamp = data.getTime();
        var tokenString = `'username':'${username}'`;

        var token = encrypt.aseEncode(tokenString,'zstd');
        console.log(token);

        console.log("登录成功");
        res.send({
          token:token,
          status:'成功'
        });
      }
    })


})


module.exports = router;
