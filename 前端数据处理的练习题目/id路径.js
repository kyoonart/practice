// 有这么一个数据结构:
// 根据某一节点id查找这个id所在的完整路径。
const data = [
  {
    id: "1",
    sub: [
      {
        id: "2",
        sub: [
          {
            id: "3",
            sub: null,
          },
          {
            id: "4",
            sub: [
              {
                id: "6",
                sub: null,
              },
            ],
          },
          {
            id: "5",
            sub: null,
          },
        ],
      },
    ],
  },
  {
    id: "7",
    sub: [
      {
        id: "8",
        sub: [
          {
            id: "9",
            sub: null,
          },
        ],
      },
    ],
  },
  {
    id: "10",
    sub: null,
  },
];
// 现在给定一个id， 要求实现一个函数

// findPath(data, id) {

// }
// 返回给定id在 data 里的路径
// 示例:

// id = "1" => ["1"]
// id = "9" => ["7", "8", "9"]
// id = "100" => []
// PS: id 全局唯一， 无序
// 通过树节点id获取子父节点路径的函数
const findPath = (data, id, path = []) => {
  if (!data) return [];
  for (const item of data) {
    path.push(item.id);
    if (item.id == id) return path;
    if (item.sub && item.sub.length > 0) {
      const findChildren = findPath(item.sub, id, path);
      if (findChildren) return findChildren;
    }
    path.pop();
  }
};
let r = findPath(data, 4);
console.log("rr", r);
// const findPath = (data, id, result = []) => {
//   for (let i = 0; i < data.length; i++) {
//     result.push(data[i].id);
//     if (data[i].id == id) {
//       return result;
//     }
//     console.log("result", result);
//     let subs = data[i].sub || [];
//     if (subs && subs.length) {
//       let findChildren = findPath(subs, id, result);
//       if (findChildren) return findChildren;
//     }
//     result.pop();
//   }
// };
// let tt = findPath(data, 9);
// console.log("tt", tt);
