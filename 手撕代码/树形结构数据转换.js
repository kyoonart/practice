let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
];
let listMap = list.reduce((memo, current) => {
  memo[current["id"]] = current;
  return memo;
}, {});
let result = list.reduce((arr, current) => {
  let pid = current["parentId"];
  let parent = listMap[pid];
  if (parent) {
    parent.children
      ? parent.children.push(current)
      : (parent.children = [current]);
  } else if (pid === 0) {
    arr.push(current);
  }
  return arr;
}, []);
console.log(result);
