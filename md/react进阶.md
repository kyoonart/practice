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
##### react 生命周期
 React 两个重要阶段，render 阶段和 commit 阶段，React 在调和( render )阶段会深度遍历 React fiber 树，目的就是发现不同( diff )，不同的地方就是接下来需要更新的地方，对于变化的组件，就会执行 render 函数。在一次调和过程完毕之后，就到了commit 阶段，commit 阶段会创建修改真实的 DOM 节点。
 - render阶段 执行顺序：constructor -> getDerivedStateFromProps / componentWillMount -> render -> componentDidMount
 ![render阶段](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9838872f404c474b87612400c3a6c504~tplv-k3u1fbpfcp-watermark.image)
 update更新阶段
 ![update更新阶段](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de17c24547b040b9a93b01706d9e585b~tplv-k3u1fbpfcp-watermark.image)
 - 更新阶段对应的生命周期的执行顺序：
componentWillReceiveProps( props 改变) / getDerivedStateFromProp -> shouldComponentUpdate -> componentWillUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
- 销毁阶段
 ①执行生命周期 componentWillUnmount
###### 一些重要的生命周期函数的作用
- getDerivedStateFromProps 作用：
代替 componentWillMount 和 componentWillReceiveProps
组件初始化或者更新时，将 props 映射到 state。
返回值与 state 合并完，可以作为 shouldComponentUpdate 第二个参数 newState ，可以判断是否渲染组件。(请不要把 getDerivedStateFromProps 和 shouldComponentUpdate 强行关联到一起，两者没有必然联系)
- getSnapshotBeforeUpdate
getSnapshotBeforeUpdate(prevProps,preState){}
把 getSnapshotBeforeUpdate 用英文解释一下 ， get | snap shot | before | update ， 中文翻译为 获取更新前的快照，可以进一步理解为 获取更新前 DOM 的状态。见名知意，上面说过该生命周期是在 commit 阶段的before Mutation ( DOM 修改前)，此时 DOM 还没有更新，但是在接下来的 Mutation 阶段会被替换成真实 DOM 。此时是获取 DOM 信息的最佳时期，getSnapshotBeforeUpdate 将返回一个值作为一个snapShot(快照)，传递给 componentDidUpdate作为第三个参数。
8 componentDidUpdate
```js
componentDidUpdate(prevProps, prevState, snapshot){
    const style = getComputedStyle(this.node)
    const newPosition = { /* 获取元素最新位置信息 */
        cx:style.cx,
        cy:style.cy
    }
}
```
三个参数：
prevProps 更新之前的 props ；
prevState 更新之前的 state ；
snapshot 为 getSnapshotBeforeUpdate 返回的快照，可以是更新前的 DOM 信息。
作用
componentDidUpdate 生命周期执行，此时 DOM 已经更新，可以直接获取 DOM 最新状态。这个函数里面如果想要使用 setState ，一定要加以限制，否则会引起无限循环。
接受 getSnapshotBeforeUpdate 保存的快照信息。
##### ref
- 为什么不能在函数组件中使用createRef？
   useRef 底层逻辑是和 createRef 差不多，就是 ref 保存位置不相同，类组件有一个实例 instance 能够维护像 ref 这种信息，但是由于函数组件每次更新都是一次新的开始，所有变量重新声明，所以 useRef 不能像 createRef 把 ref 对象直接暴露出去，如果这样每一次函数组件执行就会重新声明 Ref，此时 ref 就会随着函数组件执行被重置，这就解释了在函数组件中为什么不能用 createRef 的原因。
- 类组件获取 Ref 三种方式
  + 字符串形式  eg： <div ref='devRef'></div>
  + 回调函数形式  eg：<div ref={(node)=>this.divRef=node}></div>
  + 对象形式  
 ```js
   currentDom = React.createRef(null)
    render=()=> <div>
         <div ref={ this.currentDom }  >Ref对象模式获取元素或组件</div>
   </div>
```
 ##### ref的高阶用法
 - forwardRef 转发 Ref
 - ref实现组件通信
 - 函数组件缓存数据
   +  useRef 可以创建出一个 ref 原始对象，只要组件没有销毁，ref 对象就一直存在，那么完全可以把一些不依赖于视图更新的数据储存到 ref 对象中。这样做的好处有两个
   保持全局唯一的引用、可以及时获取到改变后的最新值
   
##### Css modules css模块化的好处
- CSS Modules 的类名都有自己的私有域的，可以避免类名重复/覆盖，全局污染问题。
- 引入 css 更加灵活，css 模块之间可以互相组合。
- class 类名生成规则配置灵活，方便压缩 class 名。
 ###### css in js
 - CSS IN JS 本质上放弃了 css ，变成了 css in line 形式，所以根本上解决了全局污染，样式混乱等问题。
 - 运用起来灵活，可以运用 js 特性，更灵活地实现样式继承，动态添加样式等场景。
 - 由于编译器对 js 模块化支持度更高，使得可以在项目中更快地找到 style.js 样式文件，以及快捷引入文件中的样式常量。
 - 无须 webpack 额外配置 css，less 等文件类型
 
 
