import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import * as serviceWorker from './serviceWorker';



const salary = 10000;


const increase = {
  type:'涨工资'
}
const reducer = (state = salary,action) => {
  if(action.type === '涨工资') {
    return state += 100;
  }
  else {
    return state;
  }
}

const store = createStore(reducer);
//渲染什么数据
function mapStateToProps(state) {
  return {
    salary:state
  }
}
//触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease:()=>{dispatch({type:'涨工资'})}
  }
}


const Test = connect(mapStateToProps,mapDispatchToProps)(App);


ReactDOM.render(
  <Provider store={store}>
    <Test/>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
