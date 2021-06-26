let result = [];
const outer = (i) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i);
      resolve();
    }, i * 1000);
  });
for (var i = 0; i < 5; i++) {
  result.push(outer(i));
}
Promise.all(result).then(() => {
  setTimeout(() => {
    console.log(i);
  }, 1000);
});
// new
function New() {
  let obj = Object.create(null);
  let Fn = Array.prototype.shift.call(arguments);
  let args = Array.prototype.slice(0).call(arguments);
  obj.__proto__ = Fn.prototype;
  let result = Fn.apply(obj, args);
  return result ? result : obj;
}

// New(Fn, ...args);
function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}

//请写出以下输出结果：
Foo.getName(); // 2
getName(); //4
// Foo().getName(); // 1
// getName(); //4
// new Foo.getName(); //
// new Foo().getName();
// new new Foo().getName();
function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function solution1(array, key) {
  let len = array.length;
  let i = 0,
    j = len - 1;
  while (i < j) {
    while (array[i] <= key) i++;
    while (array[j] > key) j--;
    if (i < j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  console.log("array", array);
}
solution1([1, 4, 5, 1, 25], 9);

function deepCopy(obj) {
  // 只拷贝对象
  if (typeof obj !== "object") return;
  let result = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      result[key] =
        typeof result[key] === "object" ? deepCopy(result[key]) : result[key];
    }
  }
  return result;
}
