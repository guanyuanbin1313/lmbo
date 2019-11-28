var express = require('express');
var router = express.Router();
var encrypt = require('../common/encrypt.js');
var connection = require('../common/sqlConnection.js');

// var connection = mysql.createConnection({
//   host:'127.0.0.1',
//   port:'3306',
//   user:'root',
//   password:'',
//   database:'user'
// });


router.get('/',function(req,res,next) {
  res.send("sd");

})

router.post('/',function(req,res,next) {
  //connection.connect();
  var username = req.query.username;
  var password = req.query.password;
  password = encrypt.aseEncode(password,'zstd');
  console.log(password);
  var query1 = "select * from user where username='" + username +"' and password='" + password + "'";
  connection.query(query1,function(err,result) {
    console.log("result!!!!"+result);
    console.log("error!!!!"+err);
    if(err) {
      res.send(false);
    }
    else {
      res.send(true);
    }
  })


})


module.exports = router;
