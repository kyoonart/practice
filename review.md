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
      if(_proto==null){
        return false
      }
       if(_proto===prototype){
        return true
      }
      _proto=_proto.__proto__
    }
  }
```