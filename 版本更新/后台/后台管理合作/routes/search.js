var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');
router.get('/',function(req,res,next) {
  console.log(req.query);
  let bookname = req.query.bookname;
  console.log(bookname);
  let query1 = `select * from books where bookname like '%${bookname}%'`;
  connection.query(query1,(err,result)=>{
    if(result.length == 0) {
      res.send("没有结果");

    }else {
      console.log(result);
      res.send(result);
    }
  })

})



module.exports = router;
