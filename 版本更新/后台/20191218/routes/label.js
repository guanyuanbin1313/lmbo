var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');

router.get('/',function(req,res,next) {
   var label = req.query.label;
   var query1 = `select * from books where label like '%${label}%' order by bookId desc limit 0,8`;
   console.log(label);
   connection.query(query1,(err,result)=> {
     if(result.length == 0) {
       res.send(false)
     }
     else {
       res.send(result)
     }

   })
});



module.exports = router;
