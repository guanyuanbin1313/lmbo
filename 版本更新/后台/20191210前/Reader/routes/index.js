var express = require('express');
var router = express.Router();
var data = require('../data.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("Signin");
});

router.post('/login',function(req,res,next){
  if(req.body.username=data.users[0].username && req.body.pwd==data.users[0].password){
    res.render('home');
  }
  if(req.body.username='' || req.body.pwd==''){
    res.writeHead(200, {
      "content-type": "text/plain;charset=utf-8"
  })
    res.end("用户名或密码不为空")
  }
  else{
    res.writeHead(200, {
      "content-type": "text/plain;charset=utf-8"
  })
    res.end("用户名或密码错误")
  }
});

router.get('/home', function(req, res, next) {
  res.render("Home");
});

router.get('/adduser', function(req, res, next) {
  res.render("Adduser");
});

router.get('/user', function(req, res, next) {
  res.render("User");
});

router.get('/useredit', function(req, res, next) {
  res.render("Useredit");
});


module.exports = router;
