import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const login = {
  type:'登录成功'
}
const reducer = (state="false",action) => {
  // const token = state.token;

  switch(action.type) {
    case '登录成功':
      return action.username;
      break;
    default:
      return state;
  }
}

const store = createStore(reducer);
//渲染什么数据
function mapStateToProps(state) {
  return {
    username:state
  }
}
//触发什么行为
function mapDispatchToProps(dispatch) {
  return {
      loginSuccess(username1,token1){dispatch({type:"登录成功",token:token1,username:username1})},
  }
}


const Test = connect(mapStateToProps,mapDispatchToProps)(App);


ReactDOM.render(
  <Provider store={store}>
    <Test/>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
