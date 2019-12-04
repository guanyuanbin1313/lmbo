import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button }    from 'antd';
import { Input } from 'antd';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/register';
import Upload from './components/upload.js';
import Detail from './components/detail.js';
import BooksShelf from './components/shelf.js';

const {Search} = Input;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse:""
    };
  }

  componentDidMount() {
    console.log(this.state.apiResponse);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <div className="header">
        <a href="/"><span className="logo-title">Reader</span></a>
        <Search
        className="search-input"
        placeholder="搜索你要的书"
        enterButton="搜索"
        size="large"
        onSearch={value => console.log(value)}
        />

        <div className="login_register">
        <Link style={{color: 'white'}} to="/login">登录</Link>
        <span style={{color: 'grey',margin:'0 1vw 0 1vw'}}>|</span>
        <Link style={{color: 'white'}} to="/register">注册</Link>
        </div>
        </div>


        </div>
        <Route exact path='/' component={BooksShelf}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/detail/:id" component={Detail}/>

      </BrowserRouter>

    );

  }
}
