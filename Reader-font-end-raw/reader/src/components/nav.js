import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Nav,Input } from 'antd';

import { connect } from 'react-redux';
const {Search} = Input;
class Nav1 extends React.Component{




  deleteItem() {
    localStorage.removeItem('token');
    window.location.reload();
  }
  constructor
  (props) {
    super(props);
    this.state={
      data:{}
    }
  }
  componentDidMount() {
    console.log(this.props.username);
  }
  render() {
    console.log(this.props.username);
    const { username } = this.props;
    return(
      <div className="container">
        <a href="http://localhost:3000/"><img style={{width:'100vw'}} src='./imgs/nav.jpg'></img></a>
        <div className="header">
        <ul className="nav-label">
          <a><li>文学</li></a>
          <a><li>社科</li></a>
          <a><li>财经</li></a>
          <a><li>少儿</li></a>
          <a><li>科技</li></a>
        </ul>
          <Search
          style={{color:'white'}}
          className="search-input"
          placeholder="搜索你要的书"
          size="large"
          onSearch={(value)=>{this.props.history.push(`/search/${value}`)}}
          />
          <div className="login_register" style={{float:'right',marginRight:'0'}}>
            {this.props.username == 'false' ? <div> <Link style={{color: 'white'}} to="/login">登录</Link>
            <span style={{color: 'grey',margin:'0 1vw 0 1vw'}}>|</span>
            <Link style={{color: 'white'}} to="/register">注册</Link></div>
            :<div><a href='' style={{color:'white'}}>{username}</a>|<a style={{marginLeft:'5px',color:'white'}} onClick={()=>{this.deleteItem()}}>登出</a></div>}
          </div>
          </div>
      </div>

  )
}
}
export default connect(function(state) {
  return {
    username:state
  }
})(Nav1)
