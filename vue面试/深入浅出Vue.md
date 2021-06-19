深入浅出 Vue.js

什么是渐进式框架：就是说如果你有一个现成的服务端应用，也就是非单页面应用，可以将 vue.js 作为该应用的一部分嵌入其中，以带来丰富的交互体验

响应式的缺陷

![image-20210212180357667](/Users/pengtao05/Library/Application Support/typora-user-images/image-20210212180357667.png)

元编程

![image-20210213142914684](/Users/pengtao05/Library/Application Support/typora-user-images/image-20210213142914684.png)

响应式原理实现

```js
let state = {
  count: 1,
};
let active = null;
function defineReactive(obj) {
  Object.keys(obj).forEach((key) => {
    let dep = []; // 记录watcher
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get: function () {
        if (active) {
          dep.push(active);
        }
        console.log(dep);
        return value;
      },
      set: function (newVal) {
        // if (newVal !== value) {
        value = newVal;
        // }
        dep.forEach((watcher) => watcher());
      },
    });
  });
}
defineReactive(state);
const watcher = (fn) => {
  active = fn;
  fn();
  active = null;
};
watcher(() => {
  app.innerHTML = state.count;
});
watcher(() => {
  console.log("更新了:", state.count);
  // console.log('更新了');
});
setTimeout(() => (state.count += 1), 1000);
//  Object.freeze() 冻结对象属性 避免被不必要的更新
```

需要在拦截器中覆盖数组的原型 否则会影响到全局数据的原型

![image-20210213145230555](/Users/pengtao05/Library/Application Support/typora-user-images/image-20210213145230555.png)

拦截数组实现

```js
let state = [1, 2, 3];
let originMethods = Array.prototype;
let arrayMethods = Object.create(originMethods);

function defineReactive(obj) {
  ["push", "shift", "pop", "unshift", "sort", "splice", "reverse"].forEach(
    (method) => {
      // 缓存原始方法
      const originMethod = arrayMethods[method];
      Object.defineProperty(arrayMethods, method, {
        value: function mutator(...args) {
          originMethod.apply(this, ...args);
        },
        enumerable: false,
        writable: true,
      });
    }
  );
  obj.__proto__ = arrayMethods;
}
defineReactive(state);
function render() {
  app.innerHTML = state;
}
render();
setTimeout(() => state.push(5), 1000);
// 索引和长度的变化是监控不到的
```

虚拟 DOM

虚拟 DOM 在 vue 中做了两件事情

1. 提供与真实 Dom 节点所对应的虚拟节点 vNode
2. 将虚拟 vnode 节点和旧虚拟节点 oldVnode 进行对比然后更新视图

三种节点

1. 静态节点
2. 文本节点
3. 元素节点

更新节点的过程

![image-20210215144627375](/Users/pengtao05/Library/Application Support/typora-user-images/image-20210215144627375.png)

模板编译

过程

1. 将模板解析成 AST（抽象语法树 --->解析器
2. 遍历 AST 标记静态节点 --->优化器
3. 处理好的 AST 来生成代码字符串 --->代码生成器

vue.$nextTick

属于微任务的有哪些

1. Promis.then
2. MutationObserver
3. Object.observe
4. process.nextTick

宏任务

1. setTimeout
2. setInterval
3. setImmediate
4. I/O
5. requestAnimationFrame
6. messageChannel
7. UI 交互事件

Vue 生命周期

整体上可分为两部分

1. 初始化阶段、模板编译阶段与挂载阶段
2. 卸载阶段

一些实践
