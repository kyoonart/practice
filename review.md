### instanceof  百分百正确吗？
```js
class PrimitiveString {
  static [Symbol.hasInstance](x) {
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
      if(_proto===null){
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
~~~js
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },
  [Symbol.toPrimitive]() {
    return 2
  }
}
1 + a // => 3
~~~
### 闭包
https://segmentfault.com/a/1190000009594773
说到闭包就先讲讲作用域，在ES5之前有两种作用域，一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。
JavaScript中变量分为两种：全局变量，局部变量。

v8 实现闭包原理 
https://segmentfault.com/a/1190000023053620
v8的预解析器
V8 引入预解析器，比如当解析顶层代码的时候，遇到了一个函数，那么预解析器并不会直接跳过该函数，而是对该函数做一次快速的预解析，其主要目的有两个：
+ 是判断当前函数是不是存在一些语法上的错误。
+ 是检查函数内部是否引用 了外部变量，如果引用了外部的变量，预解析器会将栈中的变量复制到堆中，在下次执行到 该函数的时候，直接使用堆中的引用，这样就解决了闭包所带来的问题
### 前端安全
1、xss
存储性、反射性、基于DOM型 
防御 
+  服务器端过滤或转码
+ csp（内容安全策略）本质上建立白名单，明确告诉了浏览器那些外部资源可以加载和执行 例如 只允许加载本站资源 只允许加载http协议图片 不允许加载任何来源的框架
2、csrf（跨站请求伪造）
![](https://upload-images.jianshu.io/upload_images/100028-37e1f13dd91fee0d.jpg?imageMogr2/auto-orient/strip|imageView2/2/format/webp)
防御：组织不明域的访问、Referer Check - Https不发送referer(在 HTTP 头中有一个字段叫 Referer，它记录了该 HTTP 请求的来源地址)、添加验证码
### webpack
+  webpack-dev-server是webpack官方提供的一个小型Express服务器
+  多页面打包 chunks：["home.js"]
+ loader 从右向左解析
+ happypack 多线程打包(加载loader过多很费时间)
+ tree-shaking 把没有的用到的代码自动删除掉
##### 常见的loader
（1）作用
  Loader直译为‘加载器’。webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到loader。所以loader的作用是让webpack拥有了加载和解析非javascript文件的能力
（2）使用
Loader在module.rules中配置，也就是说它作为模块的解析规则而存在，类型为数组，每一项都是一个object，里面描述了对于什么类型的文件(test)，使用什么加载(loader)和使用的参数(options)  
（3）常见的loader
 + css-loader  加载css，支持模块化、压缩、文件导入等特性
 + image-loader 加载并压缩图片
 + style-loader 把css注入js中、 通过js操作dom引入
 + eslint-loader 检查js代码
 + babel-loader:把ES6转换成ES5
 ##### 插件 
 作用
 插件可以扩展webpack的能力、让webpack具有更多的灵活性、让webpack更加强大
 使用
 Plugin在plugins中单独配置，类型为数组，每一项是一个plugin的实例，蚕食都通过构造函数传入
 常见的plugin
 define-plugin:定义环境变量
 html-webpack-plugin:简化html文件创建
 HotModuleReplacementPlugin：热更新
##### 优化
利用CDN加速：在构建过程中，将引用的静态资源路径修改为CDN上对应的路径，可以利用webpack对于output参数和各loader的publicPath参数来修改资源路径
Tree Shaking：将代码中永远不会走到的片段删除掉，可以通过在启动webpack时对追加参数 --optimize-minimize来实现
Code Splitting：将代码按路由维度或者组件分块（chunk），这样做到按需加载，同时可以充分浏览器缓存
提取公共第三方库：SplitChunkPlugin插件来进行公共模块抽取，利用浏览器缓存可以长期缓存这些无需频繁变动的公共代码
 ###### 提高打包速度
happypack：利用多线程并行编译loader
### flex布局
+ flex：1是什么意思 flex: 1 1 0%; flex-grow flex-shrink flex-basis
+ 分配到的减小宽度 = 超出宽度*(自身宽度*（自身元素的flex-shrink值 / 所有子元素的flex-shrink值 * 自身宽度 的和）)
+ 增加的同理
### Class
+ 静态方法被设计为只能被创建它们的构造器使用（也就是 Chameleon），并且不能传递给实例。因为 freddie 是一个实例，静态方法不能被实例使用，因此抛出了 TypeError 错误
+ 子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工
+ super指向问题 作为函数时 指向父类的构造函数 并且返回子类的实例相当于调用了 A.prototype.constructor.call(this) 
+ super 作为对象指向父类的原型对象 这时分为
 - 静态方法中调用super指向父类本身
 - 普通方法中调用指向父类的原型对象