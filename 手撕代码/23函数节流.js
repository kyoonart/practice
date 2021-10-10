// 函数节流：是确保函数特定的时间内至多执行一次。 好比是公交车 10分钟发一趟期间上多少人不管 反正到时间了就开车
// 函数防抖：是函数在特定的时间内不被再调用后执行。  好比是王者荣耀回城 点了很多次都是以最后一次为准
// 防抖函数 就是防止函数多次被触发，如果多次触发只执行最后一次 比如输入框输入内容查询某个东西
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
// 节流函数  将函数的多次触发间隔一段时间一个一个执行 保证一定时间内执行一次函数
const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};
// 当前时间戳
// let now = new Data.valueOf()

function throttle_(fn, wait) {
  let old = 0;
  return (...args) => {
    let now = +new Date();
    if (now - old > wait) {
      fn.apply(this, args);
      old = now;
    }
  };
}
// 定时器 清除
let timeId;

function process() {
  clearTimeout(timeId);
  let timeId = setTimeout(() => {
    console.log(233);
  }, 500);
}

// 标识+定时器
let throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};
