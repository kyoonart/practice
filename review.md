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