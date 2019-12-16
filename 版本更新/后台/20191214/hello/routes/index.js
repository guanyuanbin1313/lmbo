var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('login.html');
});
router.get('/home', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('index.html');
});

router.get('/welcome1.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('welcome1.html');
});

router.get('/welcome.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('welcome.html');
});
/*
router.get('/member-list1.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('member-list1.html');
});*/

router.get('/member-list.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('member-list.html');
});

//添加会员
router.get('/member-add.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('member-add.html');
});
//编辑
router.get('/member-edit.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('member-edit.html');
});
//修改密码
router.get('/member-password.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('member-password.html');
});


//删除会员
router.get('/member-del.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('member-del.html');
});



//订单列表
router.get('/order-list.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('order-list.html');
});
//添加
router.get('/order-add.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('order-add.html');
});


//管理员
router.get('/admin-list.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('admin-list.html');
});
//添加
router.get('/admin-add.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('admin-add.html');
});
//编辑
router.get('/admin-edit.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('admin-edit.html');
});



module.exports = router;
