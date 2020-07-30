├── /dist/ # 项目输出目录
├── /lib/ # 项目源码目录 需要读的代码都在这里
│ ├── /cancel/ # 定义取消功能
│ ├── /core/ # 一些核心功能
│ │ ├── Axios.js # axios 的核心主类
│ │ ├── dispatchRequest.js # 用来调用 http 请求适配器方法发送请求
│ │ ├── InterceptorManager.js # 拦截器构造函数
│ │ └── settle.js # 根据 http 响应状态，改变 Promise 的状态
│ ├── /helpers/ # 一些辅助方法
│ ├── /adapters/ # 定义请求的适配器 xhr、http
│ │ ├── http.js # 实现 http 适配器
│ │ └── xhr.js # 实现 xhr 适配器
│ ├── axios.js # 对外暴露接口
│ ├── defaults.js # 默认配置
│ └── utils.js # 公用工具
├── package.json # 项目信息
├── index.d.ts # 配置 TypeScript 的声明文件
└── index.js # 入口文件

### 三种使用方式

引入

````
// 首先将axios包引进来
import axios from 'axios'
```js
+
第1种使用方式：axios(option)


axios({
  url,
  method,
  headers,
})
第2种使用方式：axios(url[, option])


axios(url, {
  method,
  headers,
})

第3种使用方式（对于get、delete等方法）：axios[method](url[, option])


axios.get(url, {
  headers,
})

第4种使用方式（对于post、put等方法）：axios[method](url[, data[, option]])


axios.post(url, data, {
  headers,
})
第5种使用方式：axios.request(option)


axios.request({
  url,
  method,
  headers,
})
````
