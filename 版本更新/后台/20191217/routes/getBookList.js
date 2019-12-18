var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');
var fs = require('fs');
var path = require('path');
router.get('/',function(req,res,next) {
  var query1 = `select bookname,bookId,bookName,extName from books order by bookId desc limit 0,8; `;
  connection.query(query1,(err,result)=> {
    // console.log(result);
    res.send(result);
  })

});

router.get('/image', (req, res) => {
  var data = '';
  // console.log(req.query.id)
  var imgPath = path.join(__dirname,'../images',req.query.id);
  // console.log(imgPath);
  var readStream1 = fs.createReadStream(imgPath);
  readStream1.on('data',(chunk)=> {
    data+=chunk
  })
  readStream1.on('error',(err)=> {
    console.log(err.stack);
  })
  res.setHeader('Content-Type','image/jpg');
  readStream1.pipe(res);
});


module.exports = router;
