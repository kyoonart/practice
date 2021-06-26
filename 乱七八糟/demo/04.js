function myNew(fn, ...args) {
  let newObj = Object.create(fn.prototype);
  let result = fn.apply(newObj, args);
  return result && typeof result === "object" ? result : newObj;
}

// 节流
const throttle = (fn, delay) => {
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
// 防抖
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
