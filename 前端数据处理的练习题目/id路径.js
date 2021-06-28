// 有这么一个数据结构:

const data = [{
        id: "1",
        sub: [{
            id: "2",
            sub: [{
                    id: "3",
                    sub: null,
                },
                {
                    id: "4",
                    sub: [{
                        id: "6",
                        sub: null,
                    }, ],
                },
                {
                    id: "5",
                    sub: null,
                },
            ],
        }, ],
    },
    {
        id: "7",
        sub: [{
            id: "8",
            sub: [{
                id: "9",
                sub: null,
            }, ],
        }, ],
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
const fn = (id, arr) => {
    let result = [];
    arr.forEach((it) => {
        it.sub && it.sub.forEach((item) => {
            if (item.id === id && item.sub === null) {
                return result;
            } else {
                item.sub && result.push(item.id);
                fn(item.id, item.sub);
            }
        });
    })
};
let f = fn('7', data);
console.log(f);