import React from 'react';
import { Input,Button } from 'antd';
export default function Register() {
  return(
    <div className="login-container">
      <form action="/register" method="post">
        <Input placeholder="请输入用户名" type="primary" name="username"></Input>
        <Input style={{margin:"1vh 0 0 0"}} placeholder="请输入密码" name="password" type="primary"></Input>
        <Input style={{margin:"1vh 0 1vh 0"}} placeholder="请输入邮箱" name="password" type="email"></Input>
        <button style={{height:'3vh',width:'40%',border:'none'}} type="submit">注册</button>
      </form>
    </div>
  )
}
