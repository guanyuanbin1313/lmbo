var express = require('express');
var router = express.Router();
var encrypt = require('../common/encrypt.js');
var connection = require('../common/sqlConnection.js');



router.post('/',function(req,res,next) {
  // connection.connect();
  var username = req.query.username;
  var password = req.query.password;
  console.log(username);
  if(!username) {
    res.send("请输入用户名");
  }
  else {
    var email = req.query.email;
    password = encrypt.aseEncode(password,'zstd');
    // var querInsert = "insert into user(username,password,email)values('" + username+ "','" + )
    var queryInsert = `insert into user(username,password,email) values('${username}','${password}','${email}')`;
    console.log(queryInsert);
    connection.query(queryInsert,function(err,result) {
      if(err) {
        res.send(false);
        // var resultType = JSON.parse(JSON.stringify(result));
        console.log(err);
      }
      else {
        res.send(true);
      }
    })
  }
});

module.exports = router;
