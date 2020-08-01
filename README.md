# 记录一些最近复习巩固的知识点以及开发中可能用到的点

![69707813_p01](https://i.loli.net/2020/05/03/v8AnCXiHxZjbWaT.jpg)

#### 文字超出显示省略号

```javascript
一行
white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
多行
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
```

#### 层叠上下文

![](https://image.zhangxinxu.com/image/blog/201601/2016-01-09_211116.png)

- #### axios 本身就是 promise 类型 不需要再次封装 并且 axios 不是插件 所以不需要 Vue.use(axios) 这是错误的

  #### 子组件向父组件传值

```javascript
使用 $on(eventName) 监听事件
使用 $emit(eventName) 触发事件

Api 中的解释：

vm.$emit( event, […args] )

参数：

{string} event
[…args]
触发当前实例上的事件。附加参数都会传给监听器回调。

vm.$on( event, callback )

参数：

{string | Array} event (数组只在 2.2.0+ 中支持) {Function} callback

用法：

监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。
<hello @pfn="parentFn"></hello>

<script>
  Vue.component('hello', {
    template: '<button @click="fn">按钮</button>',
    methods: {
      // 子组件：通过$emit调用
      fn() {
        this.$emit('pfn', '这是子组件传递给父组件的数据')
      }
    }
  })
  new Vue({
    methods: {
      // 父组件：提供方法
      parentFn(data) {
        console.log('父组件：', data)
      }
    }
  })
</script>
```

#### vue 请求拦截器

```java
const whiteUrl = [ '/login', '/book/home/v2' ]
const url = '/book/home/v2'
const request = axios.create({
  baseURL: 'https://test.youbaobao.xyz:18081',
  timeout: 5000
})
request.interceptors.request.use(
  config => {
    const url = config.url.replace(config.baseURL, '')
    if (whiteUrl.some(wl => url === wl)) {
      return config
    }
    config.headers['token'] = 'abcd'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.error_code != 0) {
      alert(res.msg)
      return Promise.reject(new Error(res.msg))
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

request({
  url,
  method: 'get',
  params: {
    openId: '1234'
  }
}).then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})
   +  相应拦截器同理 request.interceptors.response.use
   +  request.interceptors.request.use 方法，即 axios 的请求拦截器，该方法需要传入两个参数，第一个参数是拦截器方，
   +  包含一个 config 参数，我们可以在这个方法中修改 config 并且进行回传，第二个参数是异常处理方法，我们可以使用 Promise.reject(error)
```

#### OPTIONS 请求即**预检请求**，Access-Control-Allow-Origin: \*

可用于检测服务器允许的 http 方法。当发起跨域请求时，由于安全原因，触发一定条件时浏览器会在正式请求之前**自动**先发起 OPTIONS 请求，即**CORS 预检请求**，服务器若接受该跨域请求，浏览器才继续发起正式请求。

#### this

首先，要明白**this 既不指向函数自身，也不指函数的词法作用域**。this 一般存在于函数中，表示当前函数的执行上下文，如果函数没有执行，那么 this 没有内容，只有函数在执行后 this 才有绑定。

是指包含它的函数作为方法被调用时所属的对象。这句话理解起来感觉还是很拗口的，但是如果你把它拆分开来变成这三句话后就好理解一点了。

1.包含它的函数

2.作为方法被调用时

3.所属的对象

#### 浏览器如何解析 css 选择器？

浏览器会『从右往左』解析 CSS 选择器。

我们知道 DOM Tree 与 Style Rules 合成为 Render Tree，实际上是需要将 Style Rules 附着到 DOM Tree 上，因此需要根据选择器提供的信息对 DOM Tree 进行遍历，才能将样式附着到对应的 DOM 元素上 后者匹配性能更好，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点）；而从左向右的匹配规则的性能都浪费在了失败的查找上面。

#### vue minins vue minins

`mixin` 用于全局混入，会影响到每个组件实例，通常插件都是这样做初始化的。

`mixins`就是定义一部分公共的方法或者计算属性,然后混入到各个组件中使用,方便管理与统一修改

#### 随机文本

在开发时经常要填充一些文本内容占位,Emmet 内置了 Lorem Ipsum 功能来实现.loremN 或者 lipsumN,N 表示生成的单词数,正整数.可以不填.

```javascript
lorem;
```

#### 隐式转换规则

注意`+`是个例外，执行`+`操作符时：

```javascript
1.当一侧为String类型，被识别为字符串拼接，并会优先将另一侧转换为字符串类型。
2.当一侧为Number类型，另一侧为原始类型，则将原始类型转换为Number类型。
3.当一侧为Number类型，另一侧为引用类型，将引用类型和Number类型转换成字符串后拼接。
```

```javascript
[] == ![] // true
!的优先级高于==，![]首先会被转换为false，然后根据上面第三点，false转换成Number类型0，左侧[]转换为0，两侧比较相等。
```

#### 一道有意思的面试题目

```java
const a = {
    value: [3, 2, 1],
    valueOf: function() { return this.value.shift(); },
}
let res =
    a == 3 && a == 2 && a == 1)
console.log(res);//true
```

#### 快速生成目录结构

```javascript
npm install --save nodetree
 default ------------- 建立一个文件
var nodetree = require('nodetree');
nodetrre(process.cwd());
options set ----------
var nodetree = require('nodetree');
nodetree(process.cwd(), {
  all: false,
  directories: false,
  level: 2,
  prune: false,
  noreport: false
});
```

### 为什么 0.1+0.2！=0.3

> [0.1+0.2！=0.3](https://www.cxymsg.com/guide/jsBasic.html#_0-1-0-2为什么不等于0-3？)

### 关于 flex 弹性盒子属性

注意：flex: 0 0 200px 是 flex: flex-grow flex-shrink flex-basis 的简写

flex-grow 是当子盒子宽度总和不足父盒子时会相应的增加子盒子的宽度 (放大比例）flex-shrink 是子盒子超过时相应的缩小子盒子的宽度，flex-basis 是正常的宽度

### proxy

definprotype 需要我们在 `get` 中收集依赖，在 `set` 派发更新，之所以 Vue3.0 要使用 `Proxy` 替换原本的 API 原因在于 `Proxy` 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 `Proxy` 可以完美监听到任何方式的数据改变，唯一缺陷可能就是浏览器的兼容性不好了。

### 动画原理

Javascript 中可以通过定时器 setTimeout 来实现，css3 可以使用 transition 和 animation 来实现，html5 中的 canvas 也可以实现。除此之外，html5 还提供一个专门用于请求动画的 API，那就是 requestAnimationFrame，顾名思义就是**请求动画帧。**

- **屏幕刷新频率：**屏幕每秒出现图像的次数。普通笔记本为 60Hz

- **动画原理：**计算机每 16.7ms 刷新一次，由于人眼的视觉停留，所以看起来是流畅的移动。

- **setTimeout：**通过设定间隔时间来不断改变图像位置，达到动画效果。但是容易出现卡顿、抖动的现象；原因是：1、settimeout 任务被放入异步队列，只有当主线程任务执行完后才会执行队列中的任务，因此实际执行时间总是比设定时间要晚；2、settimeout 的固定时间间隔不一定与屏幕刷新时间相同，会引起丢帧。浏览器默认定时器的最小等待时间为 0.4s 不足 0.4s 会补上！

- **requestAnimationFrame：**优势：由系统决定回调函数的执行时机。60Hz 的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会引起丢帧，不会卡顿。

### 统计页面所有的标签

```js
console.log(
  [...new Set(document.querySelectorAll("*"))].map((v) => v.tagName).length
);
// 网页内容随便编辑
document.body.contentEditable = "true";
```

### 状态码

**3XX 重定向**

- 301 moved permanently，永久性重定向，表示资源已被分配了新的 URL
- 302 found，临时性重定向，表示资源临时被分配了新的 URL
- 303 see other，表示资源存在着另一个 URL，应使用 GET 方法获取资源
- 304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况
- 307 temporary redirect，临时重定向，和 302 含义类似，但是期望客户端保持请求方法不变向新的地址发出请求

**4XX 客户端错误**

- 400 bad request，请求报文存在语法错误
- 401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
- 403 forbidden，表示对请求资源的访问被服务器拒绝
- 404 not found，表示在服务器上没有找到请求的资源

**5XX 服务器错误**

- 500 internal sever error，表示服务器端在执行请求时发生了错误
- 501 Not Implemented，表示服务器不支持当前请求所需要的某个功能
- 503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求

### 为什么操作 DOM 慢

 因为 DOM 是属于渲染引擎中的东西，而 JS 又是 JS 引擎中的东西。当我们通过 JS 操作 DOM 的时候，其实这个操作涉及到了两个线程之间的通信，那么势 必会带来一些性能上的损耗。操作 DOM 次数一多，也就等同于一直在进行线程之间的通信，并且操作 DOM 可能还会带来重绘回流的情况，所以也就导致了性能上的问题。

### 作用域链

访问一个变量时，解释器会首先在当前作用域查找标示符，如果没有找到，就去父作用域找，直到找到该变量的标示符或者不在父作用域中，这就是作用域链。

### 类型转换

七种内置类型：

Number string Boolean,null undefined symbol object 还有新的 bigint

**[Symbol.hasInstance]说明 instanceof 是不准确的**

**重写 `Symbol.toPrimitive` 类型转换也是不准确的 toString**

**没有任何方法可以更改私有的 Class 属性，因此 Object.prototype.toString 是可以准确识别对象对应的基本类型的方法，它比 instanceof 更加准确。**

 词法环境（Lexical Environment）

### 词法环境有两个**组成部分**

- 1、**环境记录**：存储变量和函数声明的实际位置
- 2、**对外部环境的引用**：可以访问其外部词法环境

词法环境有两种**类型**

- 1、**全局环境**：是一个没有外部环境的词法环境，其外部环境引用为 **null**。拥有一个全局对象（window 对象）及其关联的方法和属性（例如数组方法）以及任何用户自定义的全局变量，`this` 的值指向这个全局对象。
- 2、**函数环境**：用户在函数中定义的变量被存储在**环境记录**中，包含了`arguments` 对象。对外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境。

### 闭包：

**当函数可以记住并访问所在的词法作用域时，就产生了闭包，即函数是在当前词法作用域之外执行。**

### 执行上下文

执行上下文也就是执行环境。执行环境中定义了变量和对象，决定了他们的行为。每个环境都有个活动对象，也就是常说的 AO VO ,这个对象中保存着当前环境的变量和对象。虽然我们不能访问他， 但是 js 解析器可以访问他，， **在生成执行上下文时，会有两个阶段。第一个阶段是创建的阶段（具体步骤是创建 `VO`），`JS` 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为 `undefined`，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用。** 每个执行上下文有三个重要的属性，变量对象，作用域链（也就是说作用链是静态的在创建的时候就已经确定好了）,this; 当执行流进入一个函数时，函数的环境就会被推入执行栈，而当函数执行后函数的环境会被弹出栈，通过执行栈来管理函数的运行

执行上下文创建的四部曲，

1:创建 AO 对象，找形参，和变量声明，

2:将变量和形参名作为 AO 的属性，值为 undefined

3：将实参值和形参统一

4:在函数体内找到函数声明，值赋给函数体

### 原型链图

![](https://i.loli.net/2020/05/03/yRmpBnNUxfPYahc.png)

### vue 运行机制

![](https://i.loli.net/2020/05/08/JTOlYpfsu43qWrI.jpg)

### 说一下 Vue 的生命周期

`beforeCreate`是 new Vue()之后触发的第一个钩子，在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问。

`created`在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发 updated 函数。可以做一些初始数据的获取，在当前阶段无法与 Dom 进行交互，如果非要想，可以通过 vm.\$nextTick 来访问 Dom。

`beforeMount`发生在挂载之前，在这之前 template 模板已导入渲染函数编译。而当前阶段虚拟 Dom 已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发 updated。

`mounted`在挂载完成后发生，在当前阶段，真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom 节点，使用\$refs 属性对 Dom 进行操作。

`beforeUpdate`发生在更新之前，也就是响应式数据发生更新，虚拟 dom 重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。

`updated`发生在更新完成之后，当前阶段组件 Dom 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。

`beforeDestroy`发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。

`destroyed`发生在实例销毁之后，这个时候只剩下了 dom 空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。

![](https://user-gold-cdn.xitu.io/2020/4/5/171467924210a82d?imageslim)

### defer async

`defer`与`async`的区别是：`defer`要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；`async`一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，`defer`是“渲染完再执行”，`async`是“下载完就执行”。另外，如果有多个`defer`脚本，会按照它们在页面出现的顺序加载，而多个`async`脚本是不能保证加载顺序的。
当浏览器碰到 script 脚本的时候：

<script src="script.js"></script>

没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

<script async src="script.js"></script>

有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

<script defer src="myscript.js"></script>

有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

defer 和 async 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）
它俩的差别在于脚本下载完之后何时执行，显然 defer 是最接近我们对于应用脚本加载和执行的要求的
关于 defer，此图未尽之处在于它是按照加载顺序执行脚本的，这一点要善加利用
async 则是一个乱序执行的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行
仔细想想，async 对于应用脚本的用处不大，因为它完全不考虑依赖（哪怕是最低级的顺序执行），不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的

另外 defer 和 async 一起使用的时候，会忽略 defer

### 为什么需要把 css 放到顶部 js 放到底部

- `CSS` 不会阻塞 `DOM` 的解析，但会阻塞 `DOM` 渲染。
- `JS` 阻塞 `DOM` 解析，但浏览器会"偷看"`DOM`，预先下载相关资源。
- 浏览器遇到 ``且没有`defer`或`async`属性的 标签时，会触发页面渲染，因而如果前面`CSS`资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本。

所以，你现在明白为何 <script> 最好放底部 css 最好放头部，如果头部同时有 link 与 script 的情况下，最好将 script 放在上面了吗

### CommonJS && module

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

### **我们可以通过 actions 异步提交 mutations 去 修改 state 的值并通过 getter 获取**。

### 自定义组件需要注意的点

- 三个重要的 api: events props slot
- 组件通信方式 $emit $on $parent $children **provide inject **(封装组件最常用)

### GET 和 POST 最大的区别

**主要是 GET 请求是幂等性的，POST 请求不是。这个是它们本质区别，上面的只是在使用上的区别。**

> 什么是幂等性？幂等性是指一次和多次请求某一个资源应该具有同样的副作用。简单来说意味着对同一 URL 的多个请求应该返回同样的结果。

正因为它们有这样的区别，所以不应该且不能用 get 请求做数据的增删改这些有副作用的操作。因为 get 请求是幂等的，在网络不好的隧道中会尝试重试。如果用 get 请求增数据，会有重复操作的风险，而这种重复操作可能会导致副作用（浏览器和操作系统并不知道你会用 get 请求去做增操作）。

### 百分比布局到底是怎样的？

子元素的`height`或`width`中使用百分比，是相对于子元素的直接父元素，`width`相对于父元素的`width`，`height`相对于父元素的`height`；子元素的`top`和`bottom`如果设置百分比，则相对于直接非`static`定位(默认定位)的父元素的高度，同样子元素的`left`和`right`如果设置百分比，则相对于直接非`static`定位(默认定位的)父元素的宽度；子元素的`padding`如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的`width`，而与父元素的`height`无关。跟`padding`一样，`margin`也是如此，子元素的`margin`如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的`width`；`border-radius`不一样，如果设置`border-radius`为百分比，则是相对于自身的宽度，除了`border-radius`外，还有比如`translate`、`background-size`等都是相对于自身的；

从上述对于百分比单位的介绍我们很容易看出如果全部使用百分比单位来实现响应式的布局，有明显的以下两个缺点：

- 计算困难，如果我们要定义一个元素的宽度和高度，按照设计稿，必须换算成百分比单位。
- 可以看出，各个属性中如果使用百分比，相对父元素的属性并不是唯一的。比如`width`和`height`相对于父元素的`width`和`height`，而`margin`、`padding`不管垂直还是水平方向都相对比父元素的宽度、`border-radius`则是相对于元素自身等等，造成我们使用百分比单位容易使布局问题变得复杂。

### 从内存来看 null 和 undefined 本质的区别是什么？

**解答**：

给一个全局变量赋值为 null，相当于将这个变量的指针对象以及值清空，如果是给对象的属性 赋值为 null，或者局部变量赋值为 null,相当于给这个属性分配了一块空的内存，然后值为 null， JS 会回收全局变量为 null 的对象。

给一个全局变量赋值为 undefined，相当于将这个对象的值清空，但是这个对象依旧存在,如果是给对象的属性赋值 为 undefined，说明这个值为空值

### 垂直水平居中

```javascript
/** 1 **/
.wraper {
  position: relative;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
  }
}

/** 2 **/
.wraper {
  position: relative;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

/** 3 **/
.wraper {
  .box {
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100px;
  }
}

/** 4 **/
.wraper {
  display: table;
  .box {
    display: table-cell;
    vertical-align: middle;
  }
}
//**5**//
.wrapper{
    position:relative;
    .box{
         position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
    }
}
```

### 如何实现小于 12px 的字体效果

`transform:scale()`这个属性只可以缩放可以定义宽高的元素，而行内元素是没有宽高的，我们可以加上一个`display:inline-block`;

![image-20200430163854204](C:\Users\彭涛\AppData\Roaming\Typora\typora-user-images\image-20200430163854204.png)

![](http://47.98.159.95/my_blog/week07/10.jpg)

### `setTimeout` 延时为 `0`，其实还是异步。这是因为 `HTML5` 标准规定这个函数第二个参数不得小于 `4` 毫秒

### https

https 本质上还是 http 协议 ，但是信息通过 `TLS` 协议进行了加密。

**握手过程**

因此，SSL/TLS 协议的基本过程是这样的：

> （1） 客户端向服务器端索要并验证公钥。
>
> （2） 双方协商生成"对话密钥"。
>
> （3） 双方采用"对话密钥"进行加密通信。

- `TLS` 协议位于传输层之上，应用层之下。首次进行 `TLS` 协议传输需要两个 `RTT` ，接下来可以通过 `Session Resumption` 减少到一个 `RTT`。

- 在 `TLS` 中使用了两种加密技术，分别为：对称加密和非对称加密。

  **对称加密**

  - 对称加密就是两边拥有相同的秘钥，两边都知道如何将密文加密解密。

  - 这种加密方式固然很好，但是问题就在于如何让双方知道秘钥。因为传输数据都是走的网络，如果将秘钥通过网络的方式传递的话，一旦秘钥被截获就没有加密的意义的。

    **非对称加密**

    - 有公钥私钥之分，公钥所有人都可以知道，可以将数据用公钥加密，但是将数据解密必须使用私钥解密，私钥只有分发公钥的一方才知道。
    - 这种加密方式就可以完美解决对称加密存在的问题。假设现在两端需要使用对称加密，那么在这之前，可以先使用非对称加密交换秘钥。
    - 具体的过程是这样的
      - 发送信息的双方都有私钥和公钥，当服务器发送消息给客户端的时候，服务器本身生成了私钥和公钥，将公钥暴露出去，客户端知道服务器的公钥的时候（ps:客户端本身也有私钥和公钥）把要发送的信息用接受的公钥加密，发送给服务器，同时把自己本身的公钥暴露给服务器，服务器接受到客户端的消息后，利用自己的私钥解密消息，再利用接受的公钥加密信息然后发送消息给客户端。这样只有就保障了信息的安全性

### BFC

BFC：块级格式化上下文，容器里面的子元素不会在布局上影响到外面的元素，反之也是如此(按照这个理念来想，只要脱离文档流，肯定就能产生 `BFC`

#### offset client scroll

![](https://book.apeland.cn/media/images/2019/07/01/image-20190509155904965.png)

![](https://book.apeland.cn/media/images/2019/07/01/image-20190509172645475.png)

![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)

![](https://vuex.vuejs.org/vuex.png)

**redux** ：action 就像是描述发生了什么的指示器。最终，为了把 action 和 state 串起来，开发一些函数，这就是 reducer。再次地，没有任何魔法，reducer 只是一个接收 state 和 action，并返回新的 state 的函数。

### TCP/UDP

![image-20200506213700783](https://i.loli.net/2020/05/08/Rf8ogGayMqXJ2Ej.png)

三次握手：

在我看来，TCP 三次握手的建立连接的过程就是相互确认初始序号的过程，告诉对方，什么样序号的报文段能够被正确接收。第三次握手的作用是客户端对服务器端的初始序号的确认。如果只使用两次握手，那么服务器就没有办法知道自己的序号是否 已被确认。同时这样也是为了防止失效的请求报文段被服务器接收，而出现错误的情况。

### 所有的事件都有冒泡吗？

并不是所有的事件都有冒泡的，例如以下事件就没有：

- `onblur`
- `onfocus`
- `onmouseenter`
- `onmouseleave`

### 缓存

协商缓存

发请求-->看资源是否过期-->过期-->请求服务器-->服务器对比资源是否真的过期-->没过期-->返回 304 状态码-->客户端用缓存的老资源。

发请求-->看资源是否过期-->过期-->请求服务器-->服务器对比资源是否真的过期-->过期-->返回 200 状态码-->客户端如第一次接收该资源一样，记下它的 cache-control 中的 max-age、etag、last-modified 等。

```js
Last-Modefied`配合`If-Modified-Since
ETag`配合`If-None-Match
```

### 移动端适配

（1）通过媒体查询的方式即 CSS3 的 meida queries  
（2）以天猫首页为代表的 flex 弹性布局  
（3）以淘宝首页为代表的 rem+viewport 缩放  
（4）rem 方式

### jwt

#### 认证流程

#### 一：申请凭证`jwt`：

1. 客户端发送账号和密码给服务器
2. 服务器查询数据库，认证成功后服务器返回凭证`jwt`

> 为了防止伪造，需要确保`jwt`只能由服务端生成，实现方法阮一峰老师的文章有讲

#### 二：拿着凭证`jwt`访问服务器

1. 把`jwt`放到`HTTP`请求头的`Authorization`字段里【当然可以放在其他位置，只要确保服务器可以拿到】
2. 服务器拿到客户端提交的`jwt`之后，通过对`jwt`里的字段进行签名运算来验证这个`jwt`是否有效

> 签名运算只需要用到服务器的`secret`和`jwt`里的其它信息【这样就不需要去查询数据库了】

#### 总结

使用`JWT`认证，服务器变成无状态了，从而比较容易实现扩展。
`JWT`的最大缺点，由于服务器不保存`session`状态，因此无法在使用过程中废止某个`token`，或者更改 `token`的权限。也就是说，一旦`JWT`签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。
说一句套话但绝对不是空话：还是需要根据实际应用场景选用认证方式的

### 新增属性

Es6

let const 模板字符串 解构赋值 剩余运算符 数组新增方法 symbol Set Map class promise generator async await proxy module 模块化

css3 新增

过渡 动画 形状转换 选择器 阴影 边框 渐变 滤镜 filter flex grid 盒模型 媒体查询。

### Ajax 工作原理

Ajax 的工作原理相当于在用户和服务器之间加了—个中间层(AJAX 引擎)，使用户操作与服务器响应异步化。并不是所有的用户请求都提交给服务器。像—些数据验证和数据处理等都交给 Ajax 引擎自己来做,，只有确定需要从服务器读取新数据时再由 Ajax 引擎代为向服务器提交请求。

```js
/** 1. 创建连接 **/
var xhr = null;
xhr = new XMLHttpRequest()
    /** 2. 连接服务器 true（异步）或 false（同步）**/
xhr.open('get', url, true)
    /** 3. 发送请求 **/
xhr.send(null);
/** 4. 接受请求 **/
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            success(xhr.responseText);
        } else {
            /** false **/
            fail && fail(xhr.status);
        }
    }
}



各个状态码的意思
0: 请求未初始化  
1: 服务器连接已建立  
2: 请求已接收  
3: 请求处理中  
4: 请求已完成, 且响应已就绪

《Pragmatic Ajax A Web 2.0 Primer 》中偶然看到对readyStae状态的介绍，感觉这个介绍很实在，
摘译如下：
0: (Uninitialized) the send( ) method has not yet been invoked.
1: (Loading) the send( ) method has been invoked, request in progress.
2: (Loaded) the send( ) method has completed, entire response received.
3: (Interactive) the response is being parsed.
4: (Completed) the response has been parsed, is ready for harvesting.
0 － （未初始化）还没有调用send()方法
1 － （载入）已调用send()方法，正在发送请求
2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
3 － （交互）正在解析响应内容
4 － （完成）响应内容解析完成，可以在客户端调用了
```

### 前端安全

![](https://user-gold-cdn.xitu.io/2020/4/6/1714ff9939df9d71?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### vue3.0

![image-20200519141915790](C:\Users\彭涛\AppData\Roaming\Typora\typora-user-images\image-20200519141915790.png)

### js 获取浏览器的高度和宽度常见方法

``` js
网页可见区域宽：document.body.clientWidth
网页可见区域高：document.body.clientHeight
网页可见区域宽：document.body.offsetWidth (包括边线的宽)
网页可见区域高：document.body.offsetHeight (包括边线的宽)
网页正文全文宽：document.body.scrollWidth
网页正文全文高：document.body.scrollHeight
网页被卷去的高：document.body.scrollTop
网页被卷去的左：document.body.scrollLeft
网页正文部分上：window.screenTop
网页正文部分左：window.screenLeft
屏幕分辨率的高：window.screen.height
屏幕分辨率的宽：window.screen.width
屏幕可用工作区高度：window.screen.availHeight
屏幕可用工作区宽度：window.screen.availWidth
```

### vue 路径处理

``` js
 configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src")
      }
    }
  }
```

commit 提交规范

  ![image-20200802003249231](C:\Users\彭涛\AppData\Roaming\Typora\typora-user-images\image-20200802003249231.png)