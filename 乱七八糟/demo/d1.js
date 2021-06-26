const getPath = (source) => {
  let res = [];
  let index = 0;
  res[index] = "";
  for (let i = 0; i < source.length; i++) {
    if (source[i] == "'" || source[i] == "]") {
      continue;
    } else if (source[i] == "." || source[i] == "[") {
      index++;
      res[index] = "";
    } else {
      if (source[i] !== undefined) {
        res[index] += source[i];
      }
    }
  }
  console.log(res);
  return res;
};
const source = "a[0[d[f]]].b['cd'].e";
getPath(source); // ['a', '0', 'b', 'cd', 'e']
let a = 123;
let b = 456;
let res = `${a}${b}`;
console.log(res);

function merge(arr1, arr2) {
  let res = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      res.push(arr2.shift());
    } else {
      res.push(arr1.shift());
    }
  }
  while (arr1.length) res.push(arr1.shift());
  while (arr2.length) res.push(arr2.shift());
  return res;
}

// const repeatFunc = repeat(console.log, 4, 3000);
// repeatFunc("hello world");//会输出4次 hello world, 每次间隔3秒
function repeat(fn, times, delay) {
  return (arg) => {
    for (let i = 1; i <= times; i++) {
      setTimeout(() => fn.call(null, arg), i * delay);
    }
  };
}
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hello world"); //会输出4次 hello world, 每次间隔3秒
