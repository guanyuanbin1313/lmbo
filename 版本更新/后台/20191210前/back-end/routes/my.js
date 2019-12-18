var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');

router.get('/userList',function(req,res,next) {
  console.log('test');
  var query1 = `select * from books where username='${req.query.username}'`;
  console.log(query1);
  connection.query(query1,function(err,result) {
    if(result.length == 0) {
      res.send(false);
      // console.log(result);

    }
    else {
      res.send(result);
      // console.log(result);
    }

  })
})

router.get('/down',function(req,res,next) {
  // console.log('test');
  var query1 = `select * from download where username='${req.query.username}'`;
  // console.log(query1);
  connection.query(query1,function(err,result) {
    if(result){
    if(result.length == 0) {
      res.send(false);
      // console.log(result);

    }
    else {
      res.send(result);
      // console.log(result);
    }
  }



  else {

  }
})
})


module.exports = router;
