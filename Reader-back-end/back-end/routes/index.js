var express = require('express');
var router = express.Router();

/* GET home page. */

/**登录界面 */
router.get('/admin', function (req, res, next) {
  res.setHeader('content-type', 'text/html;charset=utf-8');
  res.render("Signin");
});
 router.get('/', function (req, res, next) {
  res.render("Signin");
 });

/**登录验证 */

/**主页 */
router.get('/home', function (req, res, next) {
  res.setHeader('content-type', 'text/html;charset=utf-8');
  res.render("Home");
});

//
// /**用户 */
router.get('/user', function (req, res, next) {
  res.render("User");
});

//
// /**添加用户 */
router.get('/adduser', function (req, res, next) {
  res.render("Adduser");
});
//
// /**编辑用户信息 */
router.get('/useredit', function (req, res, next) {
  res.render("Useredit");
});

// /**文件管理 */
router.get('/file', function (req, res, next) {
  res.render("File");
});

/**文件上传 */
router.get('/fileupload', function (req, res, next) {
  res.render("Fileupload");
});

module.exports = router;
