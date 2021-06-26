let treeData = {
  parent: [
    { name: "文件夹1", pid: 0, id: 1 },
    { name: "文件夹2", pid: 0, id: 2 },
    { name: "文件夹1-1", pid: 1, id: 4 },
    { name: "文件夹2-1", pid: 2, id: 3 },
  ],
  children: [
    { name: "文件1", pid: 1, id: 1001 },
    { name: "文件2", pid: 1, id: 1002 },
    { name: "文件1-1", pid: 1, id: 1003 },
    { name: "文件2-1", pid: 2, id: 1004 },
    { name: "文件3-1", pid: 4, id: 1003 },
    { name: "文件2-1", pid: 6, id: 1004 },
  ],
};
let data = [...treeData.parent, ...treeData.children];
let treeMap = data.reduce((memo, current) => {
  memo[current["id"]] = current;
  return memo;
}, {});
let res = data.reduce((arr, current) => {
  let pid = current.pid;
  let parent = treeMap[pid];
  if (parent) {
    parent.children
      ? parent.children.push(current)
      : (parent.children = [current]);
  } else if (pid === 0) {
    arr.push(current);
  }
  return arr;
}, []);

function fn(arr) {
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let item = arr[i + 1] - arr[i];
    // max = Math.max(max, item);
    if (item > max) max = item;
  }
  console.log(max);
  return max;
}
// fn([1, 4, 5, 6, 90]);
function countingSort(arr, maxValue) {
  var bucket = new Array(maxValue + 1),
    sortedIndex = 0;
  (arrLen = arr.length), (bucketLen = maxValue + 1);

  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }
  console.log(bucket);

  for (var j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }
  console.log(arr);
  return arr;
}
// countingSort([1, 4, 5, 2], 5);

function getItem(obj) {
  let res = {};
  res.id = obj["id"];
  res.name = obj["name"];
  return res;
}
function fn(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].children) {
      let ite = getItem(arr[i]);
      ite.parentId = result[result.length - 1]
        ? result[result.length - 1].id
        : null;
      result.push(ite);
      fn(arr[i].children, result);
    } else {
      let ite = getItem(arr[i]);
      ite.parentId = null;
      result.push(ite);
    }
  }
  return result;
}
let a = [
  {
    id: 1,
    name: 1,
    children: [
      {
        id: 2,
        name: 2,
        children: [
          {
            id: 3,
            name: 3,
            children: [],
          },
        ],
      },
      {
        id: 4,
        name: 4,
        children: [],
      },
    ],
  },
  {
    id: 5,
    name: 5,
    children: [{ id: 6, name: 6 }],
  },
];
let ress = fn(a);
console.log(ress);
