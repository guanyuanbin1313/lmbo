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
import SearchResult from './components/search.js';
import Nav from './components/nav.js';
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
  searching = ()=> {
    // console.log(value);
    console.log(this.props);
  }

  render() {
    const { PayIncrease } = this.props;
    return (
      <BrowserRouter>
        <div>
          <h1>{this.props.salary}</h1>
          <button onClick={PayIncrease}>增加</button>
        </div>
        <Route path='/' component={Nav}/>
        <Route exact path='/' component={BooksShelf}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/search/:id" component={SearchResult}/>
      </BrowserRouter>
    );

  }
}
