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