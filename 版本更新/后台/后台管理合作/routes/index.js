var express = require('express');
var router = express.Router();
var encrypt = require('../common/encrypt.js');
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

//首页
router.get('/welcome.html', function(req, res, next) {
  var query1 = 'select * from books';
  connection.query(query1,(err,result)=> {
    if(err) console.log(err);
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.render('welcome.html',{data:result});
  });
});





//用户列表
router.get('/member-list.html', function(req, res, next) {
  var query1 = 'select * from user';
  connection.query(query1,(err,result)=> {
    if(err) console.log(err);
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.render('member-list.html',{data:result});
  })
});
//查找用户
router.post("/usersearch",function(req,res,next){
  var username = req.body.username;
  var sql = "select * from user";
  if(username){
      sql += " where username = '"+ username +"'";
  }
  //if(age){
  //    sql += " and age = '" + age + "'";
  //}

  sql.replace("and","where");
  connection.query(sql,function(err,result){
      if(err){
          res.send("查询失败: "+err);
      }else{
          res.render("member-list.html",{data:result});
      }
  });
})

//删除用户
router.get('/user/delete/?:id',function(req,res,next) {
  var id = req.params.id;
  console.log(id);
  var query1 = `delete from user where username='${id}' `;
  console.log(query1);
  connection.query(query1,function(err,result) {
    if(err) {
      res.send(false);
    }
    else {
      res.send(true);
    }
  })
})

//添加用户
router.get('/member-add.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('member-add.html');
});

router.post("/adduser",function(req,res,next){
  var email = req.body.email;
  var username = req.body.username;
  var password=req.body.password;
  password = encrypt.aseEncode(password,'zstd');
  connection.query("insert ignore into user(username,password,email) values('"+username+"','"+ password+"','"+email+"')",function(err,rows){
      if(err){
          res.send("新增失败"+err);
      }else {
          res.send("添加成功");
      }
  });
});
/*
router.post('/adduser',function(req,res,next) {
  // connection.connect();
  console.log(req.query);
  var username = req.body.username;
  var password = req.body.password;
  var email=req.body.email;
  console.log(username);
  if(!username) {
    res.send("请输入用户名");
  }
  else {
    password = encrypt.aseEncode(password,'zstd');
    // var querInsert = "insert into user(username,password,email)values('" + username+ "','" + )
    var queryInsert = `insert into admin(username,password,email) values('${username}','${password}','${email}')`;
    console.log(queryInsert);
    connection.query(queryInsert,function(err,result) {
      if(err) {
        res.send(false);
        console.log(err);
      }
      else {
        res.redirect('http://localhost:3000');
      }
    })
  }
});

*/



/*
router.get('/member-list1.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('member-list1.html');
});*/
//书籍列表
router.get('/order-list.html', function(req, res, next) {
  var query1 = 'select * from books';
  connection.query(query1,(err,result)=> {
    if(err) console.log(err);
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.render('order-list.html',{data:result});
  })
});
//删除
router.get('/book/delete/?:id',function(req,res,next) {
  var id = req.params.id;
  console.log(id);
  var query1 = `delete from books where bookId='${id}' `;
  console.log(query1);
  connection.query(query1,function(err,result) {
    if(err) {
      res.send(false);
    }
    else {
      res.send(true);
    }
  })
})

//查询
router.post("/booksearch",function(req,res,next){
  var bookname = req.body.username;
  var sql = "select * from books";
  if(bookname){
      sql += " where bookname = '"+ bookname +"'";
  }
  //if(age){
  //    sql += " and age = '" + age + "'";
  //}

  sql.replace("and","where");
  connection.query(sql,function(err,result){
      if(err){
          res.send("查询失败: "+err);
      }else{
          res.render("order-list.html",{data:result});
      }
  });
})


//添加书籍
router.get('/add', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('order-add.html');
});
router.post("/add",function(req,res,next){
  var bookId = req.body.name;
  var bookname = req.body.bookname;
  var extName=req.body.extName;
  var detail=req.body.detail;
  var shareLink=req.body.shareLink;
  var linkSecret=req.body.linkSecret;
  var label=req.body.label;
  connection.query("insert into books(bookId,bookname,extName,detail,shareLink,linkSecret,label) values('"+bookId+"','"+bookname+"','"+ extName+"','"+ detail+"','"+shareLink+"','"+ linkSecret+"','"+ label+"')",function(err,rows){
      if(err){
          res.send("新增失败"+err);
      }else {
          res.redirect("/home");
      }
  });
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
  var query1 = 'select * from admin';
  connection.query(query1,(err,result)=> {
    if(err) console.log(err);
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.render('admin-list.html',{data:result});
  })
});

//查询
router.post("/adminsearch",function(req,res,next){
  var username = req.body.username;
  var sql = "select * from admin";
  if(username){
      sql += " where username = '"+ username +"'";
  }
  //if(age){
  //    sql += " and age = '" + age + "'";
  //}

  sql.replace("and","where");
  connection.query(sql,function(err,result){
      if(err){
          res.send("查询失败: "+err);
      }else{
          res.render("admin-list.html",{data:result});
      }
  });
})

//删除
router.get('/admin/delete/:id',function(req,res,next) {
  var id = req.params.id;
  console.log(id);
  var query1 = `delete from admin where username='${id}'`;
  console.log(query1);
  connection.query(query1,function(err,result) {
    if(err) {
      res.send(false);
    }
    else {
      res.send(true);
    }
  })
})



//添加
router.get('/admin-add.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('admin-add.html');
});

router.post("/addadmin",function(req,res,next){
  var email = req.body.email;
  var username = req.body.username;
  var password=req.body.password;
  password = encrypt.aseEncode(password,'zstd');
  connection.query("insert ignore into admin(username,password,email) values('"+username+"','"+ password+"','"+email+"')",function(err,rows){
      if(err){
          res.send("新增失败"+err);
      }else {
          res.send("添加成功");
      }
  });
});


//编辑
router.get('/admin-edit.html', function(req, res, next) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.render('admin-edit.html');
});




module.exports = router;
