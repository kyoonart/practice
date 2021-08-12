	├── adapters
	│   ├── README.md
	│   ├── http.js               #node环境http对象
	│   └── xhr.js                #web环境http对象
	├── axios.js                  #入口
	├── cancel
	│   ├── Cancel.js             #取消的构造对象类
	│   ├── CancelToken.js        #取消操作的包装类
	│   └── isCancel.js           #工具类
	├── core
	│   ├── Axios.js              #Axios实例对象
	│   ├── InterceptorManager.js #拦截器控制器
	│   ├── README.md
	│   ├── buildFullPath.js      #拼接请求的url、baseURL
	│   ├── createError.js        #创建异常信息类工具
	│   ├── dispatchRequest.js    #默认的拦截器（分发完全请求的拦截器）
	│   ├── enhanceError.js       #异常信息类实体
	│   ├── mergeConfig.js        #合并配置文件（用户设置的和默认的）
	│   ├── settle.js             #根据http-code值来resolve/reject状态
	│   └── transformData.js      #转换请求或相应的数据的工具类
	├── defaults.js               #默认配置类
	├── helpers/                  #一些辅助方法
	└── utils.js                  #通用的工具类

### 三种使用方式

引入

````
// 首先将axios包引进来
import axios from 'axios'
```js

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

### 如何取消请求
import axios from 'axios'

// 第一种取消方法
axios.get(url, {
  cancelToken: new axios.CancelToken(cancel => {
    if (/* 取消条件 */) {
      cancel('取消日志');
    }
  })
});

// 第二种取消方法
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
axios.get(url, {
  cancelToken: source.token
});
source.cancel('取消日志');
```
````

例：发送 A、B 两个请求，当 B 请求成功后，取消 A 请求。

// 第 1 种写法：
```
let source;
axios.get(Aurl, {
cancelToken: new axios.CancelToken(cancel => {
source = cancel;
})
});
axios.get(Burl)
.then(() => source('B 请求成功了'));
```
// 第 2 种写法：
```
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
axios.get(Aurl, {
cancelToken: source.token
});
axios.get(Burl)
.then(() => source.cancel('B 请求成功了'));
```
相对来说，我更推崇第 1 种写法，因为第 2 种写法太隐蔽了，不如第一种直观好理解
###  源码解析
核心模块主要有两个，一个是adapters 实际请求的发出的模块，另外一个就是core里面实现了一个请求从创建到完成的整个流程控制。adapters模块是对XMLHttpRequest的包装，这里不作过多的概述（其方法细节的实现），主要还是看下core里的做了哪些事情。
首先，我们要从源码的角度来看看一个请求是如何被发出的，下面以get请求发出到收到响应为例（axios.get）。
我们在项目使用axios时，通常是  import Axios from "axios" ，别看简单的这一句导包，他里面可做了好多事：
```js
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

```
从axios.js这个入口文件，我们看到其创建了一个axios实例，并添加了一些方法。其关键方是在createInstance()：


```js

function createInstance(defaultConfig) {
  // 创建一个Axios实例，这里理解成包装了请求方法的一个对象
  var context = new Axios(defaultConfig);

  // 为request方法bind上Axios，一个包装的wrap方法：
  // 可以简单理解成创建了一个对象。之所以这样创建为了方便能 
  // axios('https://m.zz.cn/a')这样用
  var instance = bind(Axios.prototype.request, context);

  // 把 Axios.prototype 上的方法拓展到instance上
  utils.extend(instance, Axios.prototype, context);

  // 把context中的defaults、interceptors拓展到instance实例中
  utils.extend(instance, context);

  return instance;
}
```
导包成功后，接着调用请求方法，像这样（还有其他的方式）：

```js
axios
  .get(URL, {
    params: {
      zz: 'fe'
    }
  })
  .then(successFun, failureFun)
  .catch(erorFun);
```
调用的get方法其实是new Axios()中封装的方法，其最终会调到Axios.prototype.request指向的函数中（这才是所有请求方法调用的合并体）：

```js

Axios.prototype.request = function request(config) {
  ...
  // 合并配置参数
  config = mergeConfig(this.defaults, config);

  // 如果没指定请求方式，默认get
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }
  // Hook up interceptors middleware
  // ★★★ 这一块是axios的核心部分 ★★★ 
  // 其做的事情是：通过Promise把整个请求、拦截器处理封装到一条链上，按顺序调用
  // 这其中就包括最重要的一环：实际请求发送者：dispatchRequest
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

   // 添加用户拦截器到链上：请求前的
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  // 添加用户拦截器到链上：请求前的
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  }); // 通过promise.then产生关联
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }
  
  return promise;
};
```
这里面巧妙之处创建了一个请求处理链 china，在通过了Promise.resolve()创建一个promise对象，然后通过promise.then()把请求链串起来。

这种设计在设计模式上叫做：责任链模式（Chain of Responsibility），允许你将发出的请求沿着处理者链进行发送， 收到请求后， 每个处理者均可对请求进行处理， 或将其传递给链上的下个处理者。
![图片]('https://mmbiz.qpic.cn/mmbiz_png/T81bAV0NNN9ia9kGML6hb20iaOnyY2KCnP7AJZFydj8ISPp7rI8u1b19cMsTJSSkmV2FoWEa2Qbf0Seg8TCIKnKg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1')
我们在回到axios上，看他这一条链是怎样的：
![d]('https://mmbiz.qpic.cn/mmbiz_png/T81bAV0NNN9ia9kGML6hb20iaOnyY2KCnP7tDDIfTKQdebXw9MnmyP1LYER8bQtqbw8xOBvya4tap2NV75CKb7RA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1')
上面代码区里提到这个请求链中有个默认添加的重要的一环dispatchRequest，他会根据不同的平台（其实在new Axios()时已经确定使用哪个adapter了）来发出网络请求，并承担了对请求前后的数据包装工作。

```js
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}
```
接下来就是对后续拦截器的调用了（链中dispatchRequest 之前的是RequestInterceptor，之后的叫ResponseInterceptor），最终promise会回调到业务发起请求的地方。



最后，我们回头再捋一下这整个请求过程，他大致长这样
![]('https://mmbiz.qpic.cn/mmbiz_jpg/T81bAV0NNN9ia9kGML6hb20iaOnyY2KCnPjMPu5Xr52Lq95BXA9Mh5FahXibxmUlJpD2TmOkOz1EmyC9EXglH9TxA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1')
