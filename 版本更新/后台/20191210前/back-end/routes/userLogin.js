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
  console.log(req.body.token);
  if(req.body.token) {
    var token = req.body.token;
    console.log(token);
    var tokenDecode = encrypt.aseDecode(token,'zstd');
    var json1 = `{${tokenDecode}}`;
    // console.log(json1);
    var tokenJson = JSON.parse(json1);
    let username = tokenJson.username;
    let query2 = `select username from user where username='${username}'`;
    connection.query(query2,function(err,result) {
      if(result) {
        if(result.length == 0) {
          res.send(false);
        }
        else {
          // res.send(username);
          res.send(username);
          // console.log(username);
        }

      }
      else {
        res.send(false);
      }
    })

  }
  else {
    res.send(false);
  }


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
          token:false,
          status:'失败'
        });
      }
      else {
        // res.setHeader('Content-Type','text/html;charset=utf-8');
        var data = new Date();
        var timeStamp = data.getTime();
        var tokenString = `"username":"${username}"`;

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
