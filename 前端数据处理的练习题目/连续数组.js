// 连续数组
function Arr(arr) {
  var len = arr.length,
    j,
    newArr = [],
    str = "";
  for (var i = 0; i < len; i++) {
    j = i;
    if (arr[i] + 1 === arr[i + 1]) {
      while (arr[j] + 1 === arr[j + 1]) {
        str = "-->" + arr[j + 1];
        j++;
      }
      str = arr[i] + str;
      newArr.push(str);
      i = j;
    } else {
      newArr.push(arr[i].toString());
    }
  }
  console.log(newArr);
  return newArr;
}
Arr([0, 1, 2, 4, 5, 7, 13, 15, 16]);

function fn(arr) {
  let temp = 0;
  let res = [];
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    temp = i;
    if (arr[i] + 1 === arr[temp + 1]) {
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
