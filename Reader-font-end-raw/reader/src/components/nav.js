import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Nav,Input } from 'antd';
const {Search} = Input;


export default class Nav1 extends React.Component{

  constructor() {
    super();
    this.state={
      data:{}
    }
  }

  render() {
    return(
      <div className="container">
      <div className="header">
      <a href="/"><span className="logo-title">Reader</span></a>
      <Search
      className="search-input"
      placeholder="搜索你要的书"
      enterButton="搜索"
      size="large"
      onSearch={(value)=>{this.props.history.push(`/search/${value}`)}}
      />
      <div className="login_register">
      <Link style={{color: 'white'}} to="/login">登录</Link>
      <span style={{color: 'grey',margin:'0 1vw 0 1vw'}}>|</span>
      <Link style={{color: 'white'}} to="/register">注册</Link>
      </div>
      </div>
      </div>

  )
}
}
