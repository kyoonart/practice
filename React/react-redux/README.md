# npm start 启动

# npm install antd --save
# yarn add antd
# cnpm


# 使用ant design, 首先得引入
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

# npm install -save redux

# 装 redux 调试的插件
Redux Devtools  在扩展中搜索 > 安装
配置在store/index.js中配置
const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
) // 可以生成store
也可以在github上找 redux-devtools-extension

# 
Action写在响应事件中
Action > reducer > store > component

# 开发当中不小心多写了一个 a, 如type: 'changeaInput', 如何来避免呢？

changeInputValue(e) {
        // console.log(e.target.value)
        const action = {
            type: 'changeInput',  //这个action是什么东西
            value: e.target.value //改变成什么值
        }
        store.dispatch(action) // store 就相当于一个仓库
    }

一般建一个 actionTypes.js 导出常量 来避免

# 
/* eslint-disable */  //整个下面块不检查
// eslint-disable-next-line  下一行不检查

# 无状态组件 > 就是没有业务逻辑的组件， 它就是个函数或者方法
//没有业务逻辑的  可以写成无状态组件 > 这样性能可以好，为什么呢？ 没有state状态，没有生命周期函数
// 因为继承一个component 没有一个函数 或者方法好

# npm install -save axios

# redux的中间件
redux thunk
npm install --save redux-thunk
store > index.js

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
        reducer,
        enhancer // 增强函数，相当于两个函数都执行了
        // applyMiddleware(thunk),  只用这句 redux devtools 没有用
        // window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    ) // 可以生成store

export default store

# 将 后台程序放入中间件来运行
actionCreator

# Redux-saga中间件的使用
npm install --save redux-saga
# 使用redux-saga 获取 todolist列表


# React-redux