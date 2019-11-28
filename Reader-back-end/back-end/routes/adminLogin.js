var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');
var encrypt = require('../common/encrypt.js');
// var adminLoginPage = require)('./adminPage.ejs');


router.post('/',function(req,res,next) {
  var username = req.query.username;
  // console.log("username:",username);
  var password = req.query.password;
  password = encrypt.aseEncode(password,'zstd');
  var query1 = `select * from admin where username ='${username}' and password='${password}'`;
  console.log(query1);
  connection.query(query1,function(err,result) {
    console.log(err);
    console.log(result);
    if(result.length == 0) {
      res.send(err);
    }else {
      // res.send(true);
      res.redirect('/');
    }

  })


})


module.exports = router;
