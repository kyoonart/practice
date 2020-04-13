let a = new Set([1, 2, 3, 4, 5]);
let b = new Set([5, 4, 2, 6, 8, 6]);
// 并集
let union = new Set([...a, ...b]);
// 交集
let intersect = new Set([...a].filter(v => b.has(v)));
// 差集
let diffentence = new Set([...a].filter(v => !b.has(v)));
// console.log(union);
// console.log(intersect);
// console.log(diffentence);

const m = new Map();
const o = { p: 'Hello World' };
const y = { z: '233' }
m.set(o, 'content')
m.set(y, '233')
m.get(o) // "content"
console.log(m);