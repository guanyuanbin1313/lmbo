var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');
var formidable = require('formidable');
var path = require('path');


router.post('/',function(req,res,next) {
  // var form = new formidable.IncomingForm();
  // form.uploadDir = path.join(__dirname,'images');//临时目录
  // form.maxFieldsSize = 5*1024*1024;
  // form.keepExtensions = true;// 使用源文件拓展名
  // console.log("test");
  // form.parse(req,(err,fields,files)=>{
  //   if(err) {
  //     res.send(err);
  //   }
  //   var bookName = fileds.bookName;
  //   var coverName = new Date();
  //   var shareLink = fields.shareLink;
  //   var linkSecret = fields.linkSecret;
  //   //对图片重命名
  //   var extName = path.extname(files.coverPic.name);
  //   var picBasename = path.basename(files.coverPic.path);
  //   var oldPath = path.join(__dirname,picBasename)
  //
  //   fs.rename(files.coverPic.path,'/images'+coverName+extName,function(a,b){
  //
  //   })
  //   res.send("发送成功");
  // })
  res.send("test");
})
module.exports = router;
