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
#### State相关
- setState后发生了什么？
    + render 阶段 render 函数执行 -> commit 阶段真实 DOM 替换 -> setState 回调函数执行 callback 。
- 同步异步问题
- setState更新的优先级
    + flushSync 中的 setState > 正常执行上下文中 setState > setTimeout ，Promise 中的 setState。
- hooks useState相关
```js
 [ ①state , ②dispatch ] = useState(③initData);
 ① state，目的提供给 UI ，作为渲染视图的数据源。
 ② dispatch 改变 state 的函数，可以理解为推动函数组件渲染的渲染函数。
 ③ initData 有两种情况，第一种情况是非函数，将作为 state 初始化的值。 第二种情况是函数，函数的返回值作为 useState 初始化的值。
 initData为非函数的情况/* 此时将把 0 作为初使值 */
 const [ number , setNumber ] = React.useState(0)
 initData 为函数的情况:
 const [ number , setNumber ] = React.useState(()=>{
       /*  props 中 a = 1 state 为 0-1 随机数 ， a = 2 state 为 1 -10随机数 ， 否则，state 为 1 - 100 随机数   */
       if(props.a === 1) return Math.random() 
       if(props.a === 2) return Math.ceil(Math.random() * 10 )
       return Math.ceil(Math.random() * 100 ) 
    })
``` 
   + 更新
       + 第一种非函数情况，此时将作为新的值，赋予给 state，作为下一次渲染使用;
       + 第二种是函数的情况，如果 dispatch 的参数为一个函数，这里可以称它为reducer，reducer 参数，是上一次返回最新的 state，返回值作为新的 state。

- 如何监听 state 变化？
   + 类组件 setState 中，有第二个参数 callback 或者是生命周期componentDidUpdate 可以检测监听到 state 改变或是组件更新。
   + 那么在函数组件中，如何怎么监听 state 变化呢？这个时候就需要 useEffect 出场了，通常可以把 state 作为依赖项传入 useEffect 第二个参数 deps ，但是注意 useEffect 初始化会默认执行一次。
 更新的不同点
   + 在不是 pureComponent 组件模式下， setState 不会浅比较两次 state 的值，只要调用 setState，在没有其他优化手段的前提下，就会执行更新。但是 useState 中的 dispatchAction 会默认比较两次 state 是否相同，然后决定是否更新组件。
   + setState 有专门监听 state 变化的回调函数 callback，可以获取最新state；但是在函数组件中，只能通过 useEffect 来执行 state 变化引起的副作用。
   + setState 在底层处理逻辑上主要是和老 state 进行合并处理，而 useState 更倾向于重新赋值。
