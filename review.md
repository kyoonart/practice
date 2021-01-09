### Git 常用命令

```js
git commit --amend -m "New commit message" 修改上次commit信息
git remote add origin git@XX.XX.XX.12:gyjia/hotcodeserver.git 添加远程仓库
git checkout -b 'branchname'  创建并切换分支
git remote set-url origin xxx 修改远程仓库地址
git reset --hard id   回滚
git reset --hard ~HEAD 回滚上一次提交
git reset --soft HEAD^ 撤销上次commit
git reflog  查看提交记录
git log --graph 查看提交树形结构
git pull --rebase
git rebase --abort
git stash 当遇到需求还没写完却要pull代码的时候使用
git stash list / pop apply
git push --force-with-lease origin branch rebase后无法提交
 commit 提交规范
feat:新增feature
fix:修复bug
revert:代码回滚
docs:修改文档
style:修改空格标点等不修改逻辑
perf:优化相关
test:测试用例
chore:改变构建流程或增加依赖库

关闭占用端口号
1：netstat -nao|findstr 端口号
2：taskkill /pid 端口号 /f
```

### instanceof 百分百正确吗？

```js
class PrimitiveString {
  static [Symbol.hasInstance](x){
    return typeof x === 'string'
  }
}
console.log('hello world' instanceof PrimitiveString) // true
hasInstance 就是可以让我们自己定义 instanceof 的行为
instanceof 实现原理
  function  _instanceof(left,right){
    let prototype = right.prototype
    let _proto=left.__proto__
    while(true){
      if(_proto===null||_proto===undefined){
        return false
      }
       if(_proto===prototype){
        return true
      }
      _proto=_proto.__proto__
    }
  }
```

### Symbol.toPrimitive

```js
let a = {
  valueOf() {
    return 0;
  },
  toString() {
    return "1";
  },
  [Symbol.toPrimitive]() {
    return 2;
  },
};
1 + a; // => 3
```

### 闭包

https://segmentfault.com/a/1190000009594773
说到闭包就先讲讲作用域，在 ES5 之前有两种作用域，一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。
首先闭包表示有权访问另一个函数作用域中的变量的函数，常见的创建闭包的方式是在一个函数中创建另一个函数。

要了解闭包的原理首先要了解函数作用域，接下来从函数作用域推广到闭包的原理。

1、当某个函数被调用时，会创建一个执行环境及相应的作用域链。然后使用 arguments 和其他参数的值来初始化函数的活动对象。但在作用域链中，外部函数的活动对象始终处于第二位， 外部函数的外部函数的活动对象处于第三位，……以此类推，直至作为作用域的全局执行环境。

2、在函数执行过程中，为读取和写入变量的值，就需要在作用域中查找变量，依次按照内部-》外部-》外部的外部的顺序进行查找。

3、一般来讲，当函数执行完毕之后，局部活动对象就会被销毁，内存中均保存全局作用域（全局执行环境的变量对象），但是，闭包的情况不一样：在另一个函数内部定义的函数会将包含外部函数的活动对象添加到它的作用域链中，函数执行完毕后，其活动对象也不会被销毁，因为内部函数的作用域链仍然在引用这个活动对象。所以当函数执行完毕后，只是执行的作用域链会被销毁，但它的活动对象仍然保留在内存中，知道内部函数被销毁后才销毁。这就是闭包的原理。

注意：由于闭包具有以上特性，所以导致闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存。过度的使用闭包可能会导致内存占用过多，虽然像 V8 等优化后的 js 引擎会尝试回收被闭包占用的内存，但还是建议在绝对必要的时候再使用闭包。

v8 实现闭包原理
https://segmentfault.com/a/1190000023053620
无论通过何种手段将内部函数传递到所在词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包。
应用：在定时器、事件监听器、ajax 请求，使用了回调函数实际上就是在使用闭包
v8 的预解析器
V8 引入预解析器，比如当解析顶层代码的时候，遇到了一个函数，那么预解析器并不会直接跳过该函数，而是对该函数做一次快速的预解析，其主要目的有两个：

- 是判断当前函数是不是存在一些语法上的错误。
- 是检查函数内部是否引用 了外部变量，如果引用了外部的变量，预解析器会将栈中的变量复制到堆中，在下次执行到 该函数的时候，直接使用堆中的引用，这样就解决了闭包所带来的问题

### 前端安全

1、xss
XSS 攻击是指黑客往 HTML 文件中或者 DOM 中注入恶意脚本，从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段。
危害:
可以获取 cookie 信息
监听用户行为
植入恶意广告

存储性、反射性、基于 DOM 型

- 服务器端过滤或转码
- csp（内容安全策略）本质上建立白名单，明确告诉了浏览器那些外部资源可以加载和执行 例如 只允许加载本站资源 只允许加载 http 协议图片 不允许加载任何来源的框架
  2、csrf（跨站请求伪造）
  ![](https://upload-images.jianshu.io/upload_images/100028-37e1f13dd91fee0d.jpg?imageMogr2/auto-orient/strip|imageView2/2/format/webp)
  防御：阻止不明域的访问、Referer Check - Https 不发送 referer(在 HTTP 头中有一个字段叫 Referer，它记录了该 HTTP 请求的来源地址)、添加验证码
  名言:get 不写库 post 认 json（把 post 简单请求强制转换为复杂请求 使用预检请求来防御 csrf 攻击）

### webpack

webpack 打包原理是根据文件间的依赖关系对其进行静态分析，然后将这些模块按指定规则生成静态资源，当 webpack 处理程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

- module chunk bundle
- webpack-dev-server 是 webpack 官方提供的一个小型 Express 服务器
- 多页面打包 chunks：["home.js"]
- loader 从右向左解析
- happypack 多线程打包(加载 loader 过多很费时间)
- tree-shaking 把没有的用到的代码自动删除掉

##### 常见的 loader

（1）作用
Loader 直译为‘加载器’。webpack 将一切文件视为模块，但是 webpack 原生是只能解析 js 文件，如果想将其他文件也打包的话，就会用到 loader。所以 loader 的作用是让 webpack 拥有了加载和解析非 javascript 文件的能力
（2）使用
Loader 在 module.rules 中配置，也就是说它作为模块的解析规则而存在，类型为数组，每一项都是一个 object，里面描述了对于什么类型的文件(test)，使用什么加载(loader)和使用的参数(options)  
（3）常见的 loader

- css-loader 加载 css，支持模块化、压缩、文件导入等特性
- image-loader 加载并压缩图片
- style-loader 把 css 注入 js 中、 通过 js 操作 dom 引入
- eslint-loader 检查 js 代码
- babel-loader:把 ES6 转换成 ES5

##### 插件

原理
在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果
作用
插件可以扩展 webpack 的能力、让 webpack 具有更多的灵活性、让 webpack 更加强大
使用
Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 plugin 的实例，蚕食都通过构造函数传入
常见的 plugin
define-plugin:定义环境变量
html-webpack-plugin:简化 html 文件创建
HotModuleReplacementPlugin：热更新

##### 优化

利用 CDN 加速：在构建过程中，将引用的静态资源路径修改为 CDN 上对应的路径，可以利用 webpack 对于 output 参数和各 loader 的 publicPath 参数来修改资源路径
Tree Shaking：将代码中永远不会走到的片段删除掉，可以通过在启动 webpack 时对追加参数 --optimize-minimize 来实现
Code Splitting：将代码按路由维度或者组件分块（chunks），这样做到按需加载，同时可以充分浏览器缓存
scope-hosting :
提取公共第三方库：SplitChunkPlugin 插件来进行公共模块抽取，利用浏览器缓存可以长期缓存这些无需频繁变动的公共代码

###### 提高打包速度

happypack：使用多线程并行编译 loader

### flex 布局

- flex：1 是什么意思 flex: 1 1 0%; flex-grow flex-shrink flex-basis
- 分配到的减小宽度 = (自身宽度*（自身元素的 flex-shrink 值 / 所有子元素的 flex-shrink 值 * 自身宽度的和）)
- 增加的同理

### Class

- 静态方法被设计为只能被创建它们的构造器使用（也就是 Chameleon），并且不能传递给实例。因为 freddie 是一个实例，静态方法不能被实例使用，因此抛出了 TypeError 错误
- 子类没有自己的 this 对象，而是继承父类的 this 对象，然后对其进行加工
- super 指向问题 作为函数时 指向父类的构造函数 并且返回子类的实例相当于调用了 A.prototype.constructor.call(this)
- super 作为对象指向父类的原型对象 这时分为

* 静态方法中调用 super 指向父类本身
* 普通方法中调用指向父类的原型对象

### 模块化

- AMD 依赖于 requirejs,是异步加载的，是提前加载，立即加载
- CMD 依赖于 seajs ,是异步加载，延后加载，就近加载，用时加载
- CommonJS 模块 同步导入支持动态导入 输出的是一个值的拷贝 运行时加载
- Es Module 模块 异步导入 输出的是一个值的引用 编译时输出接口 -加载的差异是因为 CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行结束时才会生成。 -而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
- defer 是 渲染完再执行，async 是 下载完就执行
  它们有两个重大差异。
  CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
  CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
  第二个差异可以从两个项目的打印结果看出，导致这种差别的原因是：
  因为 CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
  重点解释第一个差异。
  CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
  看这个文章
  https://github.com/mqyqingfeng/Blog/issues/108

### DNS 解析过程

![](http://c.biancheng.net/uploads/allimg/191111/6-191111164422334.gif)
上图中分 8 个步骤介绍了域名解析的流程，每个步骤如下：

- 1. 客户端通过浏览器访问域名为 www.baidu.com (http://www.baidu.com) 的网站，发起查询该域名的 IP 地址的 DNS 请求。该请求发送到了本地 DNS 服务器上。本地 DNS 服务器会首先查询它的缓存记录，如果缓存中有此条记录，就可以直接返回结果。如果没有，本地 DNS 服务器还要向 DNS 根服务器进行查询。
- 2. 本地 DNS 服务器向根服务器发送 DNS 请求，请求域名为 www.baidu.com (http://www.baidu.com) 的 IP 地址。
- 3. 根服务器经过查询，没有记录该域名及 IP 地址的对应关系。但是会告诉本地 DNS 服务器，可以到域名服务器上继续查询，并给出域名服务器的地址（.com 服务器）。
- 4. 本地 DNS 服务器向 .com 服务器发送 DNS 请求，请求域名 www.baidu.com (http://www.baidu.com) 的 IP 地址。
- 5. .com 服务器收到请求后，不会直接返回域名和 IP 地址的对应关系，而是告诉本地 DNS 服务器，该域名可以在 baidu.com 域名服务器上进行解析获取 IP 地址，并告诉 baidu.com 域名服务器的地址。
- 6. 本地 DNS 服务器向 baidu.com 域名服务器发送 DNS 请求，请求域名 www.baidu.com (http://www.baidu.com) 的 IP 地址。
- 7. baidu.com 服务器收到请求后，在自己的缓存表中发现了该域名和 IP 地址的对应关系，并将 IP 地址返回给本地 DNS 服务器。
- 8. 本地 DNS 服务器将获取到与域名对应的 IP 地址返回给客户端，并且将域名和 IP 地址的对应关系保存在缓存中，以备下次别的用户查询时使用。

### 缓存

浏览器实现借助 http headers
强缓存 状态码 200 headers:{expries,catch-control}
协商缓存 状态码 304 Last-Modefied`配合`If-Modified-Since ETag`配合`If-None-Match

### 表单提交的 content-type

application/x-www-form-urlencoded
multipart/form-data
区别
其中的数据会被编码成以&分隔的键值对
字符以 URL 编码方式编码。

### 单元测试

业务比较复杂，前端参与的人员超过 3 人
公司非常注重代码质量，想尽一切办法杜绝线上出 bug
你是跨项目组件的提供方
你在做一个开源项目

### 不会冒泡的事件

onmouseenter
onmouseleave
scroll
blur
focus

### vue 中 key 的作用

key 是给每个 vnode 节点一个唯一的 id,可以使得 diff 算法更加准确，高效
diff 算法过程中会进行首尾交叉比较，当无法匹配的时候，会先根据 key 生成一个 map 数据结构，然后用新的节点的 key 与旧的节点进行对比，从而找到相对应的节点
更准确:因为带了 key 就不是原地复用了，在 diff 算法中有个 sameNode 函数，a.key===b.key 对比就可以避免原地复用的情况，所以会更加准确，如果不加 key 会导致之前的节点状态被保留下来，产生一系列的 bug;
（sameNode）比较节点是否是同一个 首先会对比 key 是否相同 其次是 标签名称 接下来是 是否是静态节点 如果是 input 标签 type 值是否相同

```js
function sameVnode(a, b) {
  return (
    a.key === b.key &&
    ((a.tag === b.tag &&
      a.isComment === b.isComment &&
      isDef(a.data) === isDef(b.data) &&
      sameInputType(a, b)) ||
      (isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)))
  );
}
```

更快速：key 的唯一性可以被 map 数据结构充分利用，想比于遍历查复度 O(N),map 的时间复杂度为 O(1)

### diff 的本质

过程
1，先比较同级再比较子节点
2，先判断一方有子节点和一方没有子节点的情况，如果新的一方有子节点，旧的一方没有，那么相当于新的子节点代替了原来没有的节点。同理如果新的一方没有子节点，旧的一方有，相当于要把老的节点删除掉
3，再比较都有子节点的情况，这是 diff 的核心，首先会通过判断两个节点的 key、tag、isComment（是否是静态节点、data 同时定义或者不定义，以及如果标签是 input 的情况下 type 值是否相同来确定是否是同一个节点。如果不是的话就将新的节点替换旧的节点
4，如果是相同节点的话会进入到 patchVnode 阶段,这个阶段的核心就是采用双指针来首位交叉对比，在这个过程中，会用到模版编译时的静态标记配合 key 来跳过对比静态节点，如果不是的话再进行其它的比较。

### webpack 打包原理

webpack 打包原理是根据文件间的依赖关系对其进行静态分析，然后将这些模块按指定规则生成静态资源，
当 webpack 处理程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
