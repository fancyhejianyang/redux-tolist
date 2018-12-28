// import Redux from 'redux';
// 引入createStore 创建store ,引入applyMiddleware 使用中间件
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import DevTools from 'redux-devtools';
//引入所有的reducer
import { todoApp } from '../reducers/index';
//利用 redux-logger 打印
import { createLogger } from 'redux-logger';
//安装redux-devtools-extension 可视化工具
import { composeWithDevTools } from 'redux-devtools-extension';
//使用日志打印方法 collapsed 让action 折叠
createLogger({ collapsed: true });
// const win = window;
let middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(require('redux-immutable-state-invariant').default());
}
middleware.push(thunk);
const reduxEnhancers = compose(
  applyMiddleware(...middleware),
  // (win && win.devToolsExtension ? win.devToolsExtension() : f => f),
  composeWithDevTools()
);
let store = createStore(
  todoApp,
  {},
  reduxEnhancers,
  // composeWithDevTools()
);
// let currentValue;
let listener = () => {
  // let previosValue = currentValue;
  // let currentValue = store.getState();
  // console.log('上一个值：', previosValue, '当前值：', currentValue);
}
store.subscribe(listener);
export const todoStore = store;