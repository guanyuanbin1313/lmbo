var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');


router.get('/',function(req,res,next) {
  console.log(req.query.username);
  var query1 = `insert into download(username,bookId,bookname) values('${req.query.username}','${req.query.id}','${req.query.bookname}')`;

  connection.query(query1,(err,result)=> {
    if(err) {
      console.log(err);
    }
    else {
      console.log('记录成功');
    }
  })
})


module.exports = router;
