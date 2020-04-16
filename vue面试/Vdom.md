# 虚拟DOM的实际应用
### 什么是虚拟DOM
 + 使用js的object来模拟真是的dom，更新前做diff，达到最少操作dom的效果
 + vue 1.0 响应式采用了objec.defineProptype 每个数据的修改都会通知dom去修改
 + vue 2.0响应式的级别提升了， watcher只到组件级别，组件内部使用虚拟dom
```javascript

```