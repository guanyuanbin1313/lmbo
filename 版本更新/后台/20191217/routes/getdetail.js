var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');

router.get('/',function(req,res,next) {

  var id = req.query.id;
  var query1 = `select * from books where bookId = ${id}`;
  connection.query(query1,(err,result)=> {
    if(result.length == 0) {
      res.send(false);
    }
    else {
      res.send(result);
    }
  })

})


module.exports = router;
