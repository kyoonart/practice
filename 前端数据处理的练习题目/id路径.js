// 有这么一个数据结构:

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
// function isContinued(arr) {
//   let flag = false;
//   let len = arr.length - 1;
//   let newArr = arr.map((i) => +i);
//   if ((newArr[len] - newArr[0]) / len === 1) return true;
//   return false;
// }
// console.log(isContinued(["1", "2", "3", "4"]));

// let result = [];
// const fn = (id, arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i];
//     if (result.id === id) {
//       return result;
//     } else {
//       result.push(temp.id);
//     }
//   }
// };
var returnedItem = [];
var find = function (arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      return returnedItem;
      break;
    } else if (arr[i].sub && arr[i].sub.length > 0) {
      returnedItem.push(arr[i].id);
      find(arr[i].sub, id); //递归调用
    }
  }
  return returnedItem;

  // arr.forEach((item) => { //利用foreach循环遍历
  //     if(item.id==id)//判断递归结束条件
  //     {
  //         returnedItem = item;
  //         return item;
  //     }
  //     else if(item.children.length > 0) //判断chlidren是否有数据
  //     {
  //         find(item.children, id);  //递归调用
  //     }
  // })
};

// var item = find(array, 187);
console.log(find(data, 6));

// let f = findPath("7", data);
// console.log(f);
