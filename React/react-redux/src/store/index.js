// 仓库管理文件   类似图书馆
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
// redux-thunk 配置
// import thunk from 'redux-thunk'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
// const enhancer = composeEnhancers(applyMiddleware(thunk))

// redux-saga 配置
import createSagaMiddlewar from "redux-saga";
import mySage from "./sagas";
const sagaMiddleware = createSagaMiddlewar();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
  reducer,
  enhancer // 增强函数，相当于两个函数都执行了
  // applyMiddleware(thunk),  只用这句 redux devtools 没有用
  // window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
); // 可以生成store

//
sagaMiddleware.run(mySage);

export default store;
