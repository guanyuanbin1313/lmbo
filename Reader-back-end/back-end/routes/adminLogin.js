var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');
var encrypt = require('../common/encrypt.js');
// var adminLoginPage = require)('./adminPage.ejs');

// router.get('/',function(req,res,next) {
//   res.render("Signin");
// })
router.post('/',function(req,res,next) {
  var username = req.body.username;

  var password = req.body.password
  password = encrypt.aseEncode(password,'zstd');
  var query1 = `select * from admin where username ='${username}' and password='${password}'`;
  console.log(query1);
  connection.query(query1,function(err,result) {
    console.log(err);
    console.log(result);

    if(result.length == 0) {
      res.send(err);
    }else {
      res.render('Home');
    }

  })
  console.log(req.body.password);


})


module.exports = router;
