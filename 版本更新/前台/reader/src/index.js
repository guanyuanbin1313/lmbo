import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const state = '没登陆';


const login = {
  type:'登录成功'
}
const reducer = (state = {username:'test',token:''},action) => {
  const username = state.username;
  const token = state.token;
  switch(action.type) {
    case '登录成功':
      return {username:username,token:token}
      break;
    default:
      return {username:'',token:''}
  }
}

const store = createStore(reducer);
//渲染什么数据
function mapStateToProps(state) {
  return {
    username:state.username
  }
}
//触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    loginSuccess:(state,action)=>{dispatch({type:'涨工资'})}
  }
}


const Test = connect(mapStateToProps,mapDispatchToProps)(App);


ReactDOM.render(
  <Provider store={store}>
    <Test/>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
