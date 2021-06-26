const reverArray = (n, m) => {
  let arr = [...new Array(n)].map((el, j) => [
    ...new Array(m).fill(0).map((el, i) => (j == 0 ? i + 1 : j * n + i + 1)),
  ]);
  let newArr = [];
  for (let i = 0; i < m; i++) {
    newArr[i] = [];
    for (let j = 0; j < n; j++) {
      newArr[i].push(arr[j][i]);
    }
  }
  return newArr;
};
let res = reverArray(3, 4);
console.log(res);

const findNumber = (str) => {
  let res = 0;
  for (let i of str) {
    if (Number(i)) {
      res = res * 10 + Number(i);
    } else {
      if (res) {
        console.log(res);
        res = 0;
      }
    }
  }
};

findNumber("He15l154lo87wor7l87d");

var merge = function (nums1, m, nums2, n) {
  let arr1 = m <= nums1.length ? nums1.slice(0, m) : nums1;
  let arr2 = n <= nums2.length ? nums2.slice(0, n) : nums2;
  let i = 0,
    j = 0;
  let res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else {
      res.push(arr1[i]);
      i++;
    }
  }
  if (i === arr1.length) {
    res = res.concat(arr2.slice(j, arr2.length));
  } else {
    res = res.concat(arr1.slice(j, arr1.length));
  }
  console.log(res);
  return res;
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

function bar() {
  console.log("bar");
  Promise.resolve().then((str) => console.log("micro-bar"));
  setTimeout((str) => console.log("macro-bar"), 0);
}

function foo() {
  console.log("foo");
  Promise.resolve().then((str) => console.log("micro-foo"));
  setTimeout((str) => console.log("macro-foo"), 0);

  bar();
}
foo();
console.log("global");
Promise.resolve().then((str) => console.log("micro-global"));
setTimeout((str) => console.log("macro-global"), 0);
foo bar global micro-global macro-bar macro-global 