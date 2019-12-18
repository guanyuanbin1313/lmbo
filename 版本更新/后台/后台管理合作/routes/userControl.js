var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');

// 获取用户列表
router.get('/userList',function(req,res,next) {

})

router.get('/delete/:id',function(req,res,next) {
  var id = req.params.id;
  console.log(id);

  var query1 = `delete from books where bookId='${id}' `;
  console.log(query1);
  connection.query(query1,function(err,result) {
    if(err) {
      res.send(false);

    }
    else {
      res.send(true);
    }
  })


})

/*
router.get('/delete/:id',function(req,res,next) {
    var id = req.params.id;
    console.log(id);
    var query1 = `delete from books where bookId='${id}' `;
    console.log(query1);
    connection.query(query1,function(err,result) {
      if(err) {
        res.send(false);
      }
      else {
        res.send(true);
      }
    })
  })*/





module.exports = router;
