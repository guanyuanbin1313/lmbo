var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');


router.post('/',function(req,res,next) {
  console.log('test');
  var detail = req.body.commit;
  var username = req.body.username;
  var commitTime = new Date();
  var id = commitTime.getTime();
  var bookId = req.body.bookId;
  console.log(username);
  var query1 = `insert into commit(username,id,detail,bookId) values('${username}','${id}','${detail}','${bookId}')`;

})


module.exports = router;
