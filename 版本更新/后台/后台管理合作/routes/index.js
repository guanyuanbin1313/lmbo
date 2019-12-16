var express = require('express');
var router = express.Router();
var connection = require('../common/sqlConnection.js');
/* GET home page. */

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
  var query1 = 'select * from books';
  connection.query(query1,(err,result)=> {
    if(err) console.log(err);
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.render('member-list.html',{data:result});
  })

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


  var query1 = `select username,password from user `;
  connection.query(query1,function(err,result){
    // console.log(result);
    // if(result) {
    //   if(result.length == 0) {
    //     res.setHeader("Content-Type", "text/html;charset=utf-8");
    //     res.render('member-del.html',{data:result});
    //
    //   }
    //   else {
    //     console.log('test2');
    //     console.log(result[1].username);
    //       res.setHeader("Content-Type", "text/html;charset=utf-8");
    //       res.render('member-del.html',{data:result});
    //   }
    // }
    // else {
    //   res.setHeader("Content-Type", "text/html;charset=utf-8");
    //   res.render('member-del.html',{data:result});
    // }


    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.render('member-del.html',{data:result});
  })

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
