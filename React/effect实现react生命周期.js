// componentDidMounted
useEffect(() => {
  console.log("componentDidMount");
  return () => {
    console.log("compomponentWillUnmount");
  };
}, []);
// componentDidUpdate
const flag = useRef(false);
useEffect(() => {
  if (!flag.current) {
    flag.current = true;
  } else {
    console.log("componentDidUpdate");
  }
});
// 16版本之前的生命周期
 初始化阶段 
 constructor()
 挂载阶段
 componentWillMount()
 render()
 componentDidMount() 
 更新阶段
 props 
 componentWillReceiveProps(nextProps)
 shouldComponentUpdate()
 componentWillUpdate()
 true?render()
 componentDidUpdate()
 state
 shouldComponentUpdate()
 componentWillUpdate()
 true? render()
 componentDidUpdate()
卸载阶段
componentWillUnmount()
// 16.4 最新版本
初始化阶段
constructor()
更新阶段
把render()之前的除了shouldComponentUpdate 都砍掉了 换成了getDerivedStateFromProps()
加了getDerivedStateFromProps() 在 render()之后,可以读取但是无法使用Dom的时候、
它使你的组件可以在可能更改之前从DOM捕获一些信息（例如滚动位置）。
此生命周期返回的任何值都将作为参数传递给componentDidUpdate（）。
// https://upload-images.jianshu.io/upload_images/5287253-19b835e6e7802233.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp