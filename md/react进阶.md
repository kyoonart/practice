### react 16+ 发展里程碑
- v16.0： 为了解决之前大型 React 应用一次更新遍历大量虚拟 DOM 带来个卡顿问题，React 重写了核心模块 Reconciler ，启用了 Fiber 架构；为了在让节点渲染到指定容器内，更好的实现弹窗功能，推出 createPortal API；为了捕获渲染中的异常，引入 componentDidCatch 钩子，划分了错误边界。

- v16.2：推出 Fragment ，解决数组元素问题。

- v16.3：增加 React.createRef() API，可以通过 React.createRef 取得 Ref 对象。增加 React.forwardRef() API，解决高阶组件 ref 传递问题；推出新版本 context api，迎接Provider / Consumer 时代；增加 getDerivedStateFromProps 和 getSnapshotBeforeUpdate 生命周期 。

- v16.6：增加 React.memo() API，用于控制子组件渲染；增加 React.lazy() API 实现代码分割；增加 contextType 让类组件更便捷的使用context；增加生命周期 getDerivedStateFromError 代替 componentDidCatch 。

- v16.8：全新 React-Hooks 支持，使函数组件也能做类组件的一切事情。

- v17： 事件绑定由 document 变成 container ，移除事件池等。
#### 基础篇 认识jsx
 总结:我们写的 JSX 会先转换成 React.element，再转化成 React.fiber 的过程。这里要牢牢记住 jsx 转化成 element 的处理逻辑，还有就是 element 类型与转化成 fiber 的 tag 类型的对应关系。这对后续的学习会很有帮助。
 [介绍一下react fiber](https://www.jianshu.com/p/ff32dea870ed)
 ##### 那么，函数组件和类组件本质的区别是什么呢？
对于类组件来说，底层只需要实例化一次，实例中保存了组件的 state 等状态。对于每一次更新只需要调用 render 方法以及对应的生命周期就可以了。但是在函数组件中，每一次更新都是一次新的函数执行，一次函数组件的更新，里面的变量会重新声明。
 ##### 组件通信方式
 - props 和 callback 方式
 - ref 方式。
 - React-redux 或 React-mobx 状态管理方式。
 - context 上下文方式。
 - event bus 事件总线。
##### 类组件和函数组件的区别：
1. 类组件的本质就是 类和函数还有 oop 思想中的继承，在此之上需要内置处理 state和props 组件的状态维护，状态 -> ui -> 渲染
2. 函数组件 没有实例化的概念，FC 思想，每个组件应该只处理一个逻辑事物不想 class组件那么复合，另外它没有转态存储能力必须依赖 hook
