// 实现[['a', 'b'], ['n', 'm'], ['0', '1']] => ["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]
function backtrack(arr) {
  return arr.reduce((prev, cur) => {
    let list = [];
    for (let i = 0; i < prev.length; i++) {
      for (let j = 0; j < cur.length; j++) {
        list.push(prev[i] + cur[j]);
      }
    }
    return list;
  });
}

console.log(
  backtrack([
    ["a", "b"],
    ["n", "m"],
    ["0", "1"],
  ])
);
// ["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]
