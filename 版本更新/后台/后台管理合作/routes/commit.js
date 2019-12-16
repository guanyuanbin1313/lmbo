var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');


router.get('/',function(req,res,next) {
  console.log('test');
  var detail = req.query.commit;
  var username = req.query.username;
  var commitTime = new Date();
  var id = commitTime.getTime();
  var bookId = req.query.bookId;
  console.log(username);
  var query1 = `insert into commit(username,id,detail,bookId) values('${username}','${id}','${detail}','${bookId}')`;
  console.log(query1);
  connection.query(query1,(err,result)=> {
    if(err) {

    }
    else {

    }
  })

})

router.get('/get',function(req,res,next) {
  let id = req.query.id;
  let query2 = `select * from commit where bookId='${id}'`;
  connection.query(query2,(err,result)=> {
    if(result) {
      if(result.length == 0) {
        console.log('失败')
      }
      else {
        console.log(result);
        res.send(result);
      }
    }
    else {
      console.log("else");
    }
  })
})


module.exports = router;
