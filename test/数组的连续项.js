function fn(arr) {
  let res = [];
  let temp = 0;
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    temp = i;
    if (arr[i] + 1 === arr[i + 1]) {
      while (arr[temp] + 1 === arr[temp + 1]) {
        str = "->" + arr[temp + 1];
        temp++;
      }
      str = arr[i] + str;
      res.push(str);
      i = temp;
    } else {
      res.push(arr[i].toString());
    }
  }
  return res;
}
let arr = [1, 3, 4, 5, 6, 7, 8, 9, 11, 34, 35, 36, 3, 38, 39];

function* foo(x) {
  console.log(1);
  let y = 2 * (yield x + 1);
  console.log(2);
  let z = yield y / 3;
  return x + y + z;
}
// let it = foo(5);
// console.log(it.next()); // => {value: 6, done: false}
// console.log(it.next(12)); // => {value: 8, done: false}
// console.log(it.next(13)); // => {value: 42, done: true}

function fn1(arr) {
  let temp = 0;
  let result = [];
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    temp = i;
    if (arr[i] + 1 === arr[i + 1]) {
      while (arr[temp] + 1 === arr[temp + 1]) {
        str = "->" + arr[temp + 1];
        temp++;
      }
      str = arr[i] + str;
      result.push(str);
      i = temp;
    } else {
      result.push(arr[i].toString());
    }
  }
  return result;
}

// console.log(fn1(arr));

const fn2 = (arr) => {
  let temp = 0;
  let str = "";
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    temp = i;
    if (arr[i] + 1 === arr[i + 1]) {
      while (arr[temp] + 1 === arr[temp + 1]) {
        str = "->" + arr[temp + 1];
        temp++;
      }
      str = arr[i] + str;
      res.push(str);
      i = temp;
    } else {
      res.push(arr[i].toString());
    }
  }
  console.log(res);
  // return res;
};
console.log(fn2(arr));
