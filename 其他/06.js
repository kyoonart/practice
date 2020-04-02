let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let nameNum = names.reduce((pre, cur) => {
    if (cur in pre) {
        pre[cur]++
    } else {
        pre[cur] = 1
    }
    return pre
}, {})
console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}