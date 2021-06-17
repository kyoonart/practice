**目标**

ssr 概念

> vue ssr 原生实现
>
> nuxt.js
>
> **资源**
>
> 测试代码，server\\01-express-test.js
>
> <img src="media/image2.jpeg" style="width:6.15278in;height:2.51736in" />打开页面查看源码，浏览器拿到的是全部的 dom 结构

### 单页应用 Single Page App

单页应用优秀的用户体验，使其逐渐成为主流，页面内容由 JS 渲染出来，这种方式称为客户端渲染。

访问 url（请求）

返回 html 结构

渲染知行 js，比如 vuejs

> 渲染 template
>
> 要数据
>
> 测试： npm run serve
>
> 打开页面查看源码，浏览器拿到的仅有宿主元素\#app，并没有内容。
>
> <img src="media/image4.jpeg" style="width:6.18681in;height:3.18958in" />
>
> spa 缺点：
>
> seo
>
> 首屏内容到达时间

### 服务端渲染 Server Side Render

SSR 解决方案，后端渲染出完整的首屏的 dom 结构返回，前端拿到的内容包括**首屏及完整 spa 结构**，应用激活后依然按照 spa 方式运行，这种页面渲染方式被称为服务端渲染
(server side render)

> 访问 url（请求）
>
> 读取 Vue 模板，解析成 dom 节点

# Vue SSR 实战

### 新建工程

演示项目使用 vue-cli 4.x 创建

### 安装依赖

确保 vue、vue-server-renderer、vue-template-compiler 版本一致

### 启动脚本

创建一个 express 服务器，将 vue ssr 集成进来，./server/02-simple-ssr.js

# 路由

路由支持仍然使用 vue-router

> **安装**
>
> 若未引入 vue-router 则需要安装
>
> **配置**

# 构建

对于客户端应用程序和服务器应用程序，我们都要使用 webpack 打包 -
服务器需要「服务器 bundle」然后用于服务器端渲染(SSR)，而「客户端
bundle」会发送给浏览器，用于混合静态标记。

> **构建流程**
>
> 开课吧 web 全栈架构师
>
> <img src="media/image7.jpeg" style="width:5.81806in;height:2.33125in" />

### 代码结构

**服务端入口**

> 服务端入口文件 src/entry-server.js

### 客户端入口

客户端入口只需创建 vue 实例并执行挂载，这一步称为激活。创建 entry-client.js：

> 对应<u>配置文档</u>

### 脚本配置

安装依赖

> 定义创建脚本，package.json

## 开课吧 web 全栈架构师

执行打包：npm run build

> **宿主文件**
>
> 最后需要定义宿主文件，修改./public/index.html
>
> &lt;!DOCTYPE html&gt;
>
> &lt;html lang="en"&gt;
>
> &lt;head&gt;
>
> &lt;meta charset="utf-8"&gt;
>
> &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
>
> &lt;meta name="viewport"
> content="width=device-width,initial-scale=1.0"&gt;
>
> &lt;title&gt;Document&lt;/title&gt;
>
> &lt;/head&gt;
>
> &lt;body&gt;
>
> &lt;!--vue-ssr-outlet--&gt;
>
> &lt;/body&gt;
>
> &lt;/html&gt;

### 服务器启动文件

修改服务器启动文件，现在需要处理所有路由，./server/04-ssr.js

> // 加载本地文件
>
> const fs = require("fs");
>
> // 处理 url
>
> const path = require("path"); const express = require('express') const
> server = express()
>
> // 获取绝对路径
>
> const resolve = dir =&gt; {
>
> return path.resolve( dirname, dir)
>
> }
>
> // 第 1
> 步：开放 dist/client 目录，关闭默认下载 index 页的选项，不然到不了后面路由
>
> // /index.html
>
> server.use(express.static(resolve('../dist/client'), {index: false}))
>
> // 第 2 步：获得一个 createBundleRenderer
>
> const { createBundleRenderer } = require("vue-server-renderer");
>
> // 第 3 步：导入服务端打包文件
>
> const bundle =
> require(resolve("../dist/server/vue-ssr-server-bundle.json"));
>
> // 第 4 步：创建渲染器

## 开课吧 web 全栈架构师

const template = fs.readFileSync(resolve("../public/index.html"),
"utf-8");

> const clientManifest = require(resolve("../dist/client/vue-ssr-client-
> manifest.json"));
>
> const renderer = createBundleRenderer(bundle, {
>
> runInNewContext: false, //
> https://ssr.vuejs.org/zh/api/\#runinnewcontext template, // 宿主文件
>
> clientManifest // 客户端清单
>
> });
>
> // 路由是通配符，表示所有 url 都接受
>
> server.get('\*', async (req,res)=&gt;{ console.log(req.url);
>
> // 设置 url 和 title 两个重要参数
>
> const context = { title:'ssr test', url:req.url // 首屏地址
>
> }
>
> const html = await renderer.renderToString(context); res.send(html)
>
> })
>
> server.listen(3000, function() {
>
> // eslint-disable-next-line no-console console.log(\`server started at
> localhost:${port}\`);
>
> });

### 整合 Vuex

安装 vuex

> npm install -S vuex
>
> store/index.js
>
> import Vue from 'vue' import Vuex from 'vuex'
>
> Vue.use(Vuex)
>
> export function createStore () { return new Vuex.Store({
>
> state: {
>
> count:108
>
> },
>
> mutations: {
>
> add(state){
>
> state.count += 1;
>
> }
>
> }
>
> })
>
> }
>
> 挂载 store，main.js
>
> 使用，.src/components/Index.vue
>
> 组件中的数据预取逻辑，Index.vue
>
> 服务端数据预取，entry-server.js
>
> 客户端在挂载到应用程序之前，store 就应该获取到状态，entry-client.js
>
> 首屏没有问题，其他页面出现状态异常，客户端没有执行异步代码。
>
> 客户端数据预取处理，main.js
>
> 缺点：
>
> 开发逻辑复杂
>
> 开发条件限制：比如一些生命周期不能用，一些第三方库会不能用服务器负载大
>
> 已经存在 spa
>
> 需要 seo 页面是否只是少数几个营销页面<u>预渲染</u>是否可以考虑确实需要做 ssr 改造，利用服务器端爬虫技术 puppeteer
>
> 最后选择重构
>
> 全新项目建议 nuxt.js

# Nuxt.js 实战

Nuxt.js 是一个基于 Vue.js 的**通用应用框架**。

> 通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的
> **UI 渲染**。
>
> **资源**
>
> <u>Nuxt</u>.j<u>s 官方文档</u>

### nuxt.js 特性

<img src="media/image6.png" style="width:4.08611in;height:4.08611in" />代码分层服务端渲染

> 强大的路由功能静态文件服务
>
> ...

### nuxt 渲染流程

一个完整的服务器请求到渲染的流程

> ![](media/image8.png)
>
> 选项
>
> <img src="media/image9.jpeg" style="width:6.13889in;height:2.35556in" />开课吧 web 全栈架构师
>
> 运行项目： npm run dev

### 案例

实现如下功能点

> 服务端渲染权限控制
>
> 全局状态管理数据接口调用

### 路由

#### 路由生成

商品列表，index.vue

#### 动态路由

**以下划线作为前缀**的 .vue 文件 或
目录会被定义为动态路由，如下面文件结构

> 生成的路由配置如下：
>
> 测试代码，detail.vue
>
> nuxt-child 等效于 router-view

#### 配置路由

要扩展 Nuxt.js 创建的路由，可以通过 router.extendRoutes
选项配置。例如添加自定义路由:

#### 默认布局

**自定义布局**

> 创建空白布局页面 layouts/blank.vue ，用于 login.vue
>
> 测试：访问一个不存在的页面

#### 页面

页面组件就是 Vue 组件，只不过 Nuxt.js
为这些组件添加了一些特殊的配置项给首页添加标题和 meta 等，index.vue

> 更多<u>页面配置项</u>

### 异步数据获取

注意配置重启生效

> 测试代码：获取商品列表，index.vue
>
> 测试代码：获取商品详情，/index/\_id.vue

### 中间件

中间件会在一个页面或一组页面渲染之前运行我们定义的函数，常用于权限控制、校验等任务。
范例代码：管理员页面保护，创建 middleware/auth.js

> 注册中间件，admin.vue
>
> 登录页面逻辑，login.vue

### 插件

Nuxt.js 会在运行应用之前执行插件函数，需要引入或设置 Vue 插件、自定义模块和第三方模块时特别有用。

> 范例代码：接口注入，利用插件机制将服务接口注入组件实例、store 实例中，创建 plugins/api-
> inject.js
>
> 注册插件，nuxt.conﬁg.js
>
> 范例：添加请求拦截器附加 token，创建 plugins/interceptor.js
>
> 范例：登录状态初始化，store/index.js
>
> 安装依赖模块：cookie-universal-nuxt
>
> 注册, nuxt.conﬁg.js
>
> nuxtServerInit 只能写在 store/index.js nuxtServerInit 仅在服务端执行

# 发布部署

### 服务端渲染应用部署

先进行编译构建，然后再启动 Nuxt 服务
