var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');
var formidable = require('formidable');
var path = require('path');
const fs = require("fs");
// function sendBook(bookId,bookname,detail) {
//   var query1 = `insert into books(bookId,bookname,detail,shareLink,linkSecret) values('${bookId}','${bookname}','${detail}','${shareLink}','${linkSecret}')`;
//   connection.query(query1,function(err,result) {
//     if(err) {
//       res.send(false);
//     }
//     else {
//       res.send(true);
//     }
//   })
// }

router.post('/',function(req,res,next) {
  var form = new formidable.IncomingForm();
  // form.uploadDir = __dirname + '/../images';
  form.uploadDir = path.join(__dirname,'../images');//临时目录
  form.maxFieldsSize = 5*1024*1024;
  form.keepExtensions = true;// 使用源文件拓展名
  console.log("test");
  // var bookname = "没有名字";
  // var coverName = new Date();
  // var shareLink = "";
  // var
  form.parse(req,(err,fields,files)=>{
    if(err) {
      res.send(err);
    }
    // console.log(fields);
    // console.log(files);
    var bookName = fields.bookname;
    var coverName = new Date();
    var bookId = coverName.getTime();
    var shareLink = fields.shareLink;
    var linkSecret = fields.linkSecret;
    var detail = fields.detail;
    var label = fields.label;
    // console.log("label",label);
    //对图片重命名
    // console.log(files);
    var extName = path.extname(files.coverPic.name);
    var picBasename = path.basename(files.coverPic.path);
    // console.log(picBasename)
    var oldPath = path.join(__dirname, "/images/" + picBasename)
    // console.log(oldPath);
    // fs.rename(files.coverPic.path, __dirname + '/images/'+coverName.getTime()+extName,function(a,b){
    //   // console.log(a);
    // })
    fs.rename(files.coverPic.path,path.dirname(files.coverPic.path) + '/' + coverName.getTime() + extName,function(a,b) {

    })



    var query1 = `insert into books(bookId,bookname,detail,shareLink,linkSecret,extName,label) values('${bookId}','${bookName}','${detail}','${shareLink}','${linkSecret}','${extName}','${label}')`;
    console.log("query1");
    connection.query(query1,function(err,result) {
      console.log("querying");
      if(err) {
        res.send(err);
      }
      else {
        res.send(true);
      }
    })

  })



})



module.exports = router;
