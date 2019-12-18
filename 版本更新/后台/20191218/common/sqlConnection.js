const mysql = require('mysql');


var connection = mysql.createConnection({
  host:'127.0.0.1',
  post:'3306',
  user:'root',
  password:'',
  database:'reader'
})
connection.connect((err) => {
  if (err) { console.log("连接失败") }
  else { console.log("连接成功") }
})
module.exports = connection;
