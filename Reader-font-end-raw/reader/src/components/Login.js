import React from 'react';
import { Input,Button } from 'antd';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{},
      userNameError:'',
      userName:'',
      password:'',

    }
  }

  usernameInputChange(e) {
    this.setState({
      userName:e.target.value
    })
  }

  passwordInputChange(e) {
    this.setState({
      password:e.target.value
    })

    }

    componentDidMount() {
      fetch('http://localhost:9000/login/info',{medod:"get"})
      .then(res=> {console.log(res.text())})
    }


  home(){
    this.props.history.push('/')
  }


  login() {

    // console.log(JSON.stringify({'username':this.state.userName,'password':this.state.password}));
    var that = this;
    fetch('http://localhost:9000/login',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({'username':this.state.userName,'password':this.state.password})
    })
    .then(res=>res.json())
    .then((res)=> {
      if(res.status == '成功') {
        localStorage.setItem('token',res.token);
        console.log('登录成功')
        console.log(res.token);
        this.props.history.push('/');
        window.location.reload();
      }
      console.log(res);
    })
    // .then(function(res) {
    //   return res.text();
    // }).then(function(res) {
    //   if(res == '登录成功') {
    //     that.props.history.push('/');
    //   }
    //   else {
    //     console.log('登录失败')
    //   }
    // })
  }



  render() {
    return(
      <div className="login-container">
      <form>
        <Input onChange={(event)=> this.usernameInputChange(event)} id='username' placeholder="请输入用户名" type="text" name="username"></Input>{this.state.userNameError}
        <Input onChange={(event)=> this.passwordInputChange(event)} style={{margin:"1vh 0 1vh 0"}} placeholder="请输入密码" name="password" type="password"></Input>
      </form>
      <button onClick={()=> this.login()} style={{color:'white',height:'3vh',width:'40%',border:'none',backgroundColor:'green'}}>登录</button>
      </div>
    )

  }
}
