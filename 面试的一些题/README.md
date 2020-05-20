### 京东 
1：如何结局高度塌陷
	①将父元素的高度写死
	②开启父元素BFC
	③可以直接在高度塌陷的父元素的最后，添加一个空白的div clear both
选用最优解决办法：使用伪类
```css
.clearfix:after{
				/*添加一个内容*/
				content: "";
				/*转换为一个块元素*/
				display: block;
				/*清除两侧的浮动*/
				clear: both;
			}
 ```
2：如何隐藏一个元素
    这三种方法分别是：display:none、visibility:hidden、opacity:0;
　　+ display:none   元素在页面上将消失，不占据页面空间，会导致浏览器的回流与重绘,不能响应交互类事件；
　　+ visibility:hidden   元素在页面占据的空间不变，所以它只会导致浏览器重绘而不会回流，也不能响应交互类事件；
　　+  opacity:0    元素在页面占据的空间不变，不会导致浏览器回流或重绘（因为浏览器对于transform和opacity这两种变化处理的方法为合成渲染），可以响应交互类事件。
   +  设置元素绝对定位将元素移出屏幕
	```css
	.box1 {
			position: absolute;
			left: 100%;
}
```
  + text-indent，一般首行缩2个中文字的用法是text-indent:2em。但当给他一个足够大的负值，大到我们浏览器无法显示。如        text-indent:-999em
3:flex:1是什么意思
  flex:1;的值是1 1 0%，【父控件有剩余空间占1份放大，父控件空间不足按1缩小，自身的空间大小是0%】
  首先明确一点是， flex 是 flex-grow、flex-shrink、flex-basis的缩写
	flex:1本质上是继承，如果父元素不知道自己有多宽，也就无法给子元素分配
	flex: 1; width: 1px;可以阻止子元素影响当前元素对于width获取的优先级
	flex-shrink: 0可以保证争取到自己所需的宽度，“0容忍，不服就干”
	宽度分配先尽量满足所有width/flex-basis，然后把剩余宽度交给flex-grow分配
`````````````````````````````````````````````````````````````````
数组去重的方法
es6 new set方法
常规方法 两层遍历 删除相同的元素
新数组+indexof
reduce+includes
map
降维的方法
es6 flat方法
toString方法 join(',').split(',')
reduce+递归
while+some 
常规遍历