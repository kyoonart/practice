function createIterator(obj) {
  let arr = Object.entries(obj);
  console.log("arr", arr);
  let i = 0;
  return {
    next() {
      let done = i >= arr.length ? true : false;
      let value = !done ? arr[i++] : undefined;
      return {
        done,
        value,
      };
    },
  };
}

const obj = {
  name: "pengtao",
  age: 18,
};

obj[Symbol.iterator] = function () {
  return createIterator(obj);
};
for (const [key, value] of obj) {
  console.log(key, value); // name iwen  age 18
}

function createIterator(obj) {
  let arr = Object.entries(obj);
  let flag = 0;
  return {
    next() {
      let done = flag > arr.length ? true : false;
      let value = !done ? arr[flag] : undefined;
      flag++;
      return {
        done,
        value,
      };
    },
  };
}
