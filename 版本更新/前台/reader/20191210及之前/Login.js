import React from 'react';
import { Input,Button } from 'antd';
export default function Login() {
  return(
    <div className="login-container">
      <form action="/login" method="post">
        <Input placeholder="请输入用户名" type="primary" name="username"></Input>
        <Input style={{margin:"1vh 0 1vh 0"}} placeholder="请输入密码" name="password" type="primary"></Input>
        <button style={{height:'4vh',width:'40%',border:'none'}} type="submit">登录</button>
      </form>
    </div>
  )
}
