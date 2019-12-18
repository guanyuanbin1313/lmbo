var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');

// 获取用户列表
router.get('/userList',function(req,res,next) {

})


router.get('/delete',function(req,res,next) {
  var id = req.query.bookId;

  console.log(id);


})






module.exports = router;
