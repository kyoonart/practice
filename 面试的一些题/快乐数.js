function isHappyNum(num) {
  let arr;
  if (Number(num)) {
    arr = num.toString().split("");
  } else return false;
  let sq = [];
  return fn(arr, sq);
}
function fn(arr, res) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Math.pow(Number(arr[i]), 2);
  }
  if (result === 1) {
    return true;
  }
  if (res.indexOf(result) > -1) {
    return false;
  } else {
    res.push(result);
  }
  return fn(result.toString().split(""), res);
}

let res = isHappyNum(19);
console.log(res);

var isHappy = function (n) {
  function getNext(num) {
    //定义转换函数
    let str = num.toString();
    let target = 0;
    for (let i = 0; i < str.length; i++) {
      target += Math.pow(str.charAt(i), 2);
    }
    return target;
  }
  let mySet = new Set(); //新建Set,并将n加进去
  mySet.add(n);
  while (1) {
    n = getNext(n); //转换
    if (n === 1) return true;
    if (mySet.has(n)) return false;
    else mySet.add(n);
  }
};
