let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
function isSame(a, b) {
  let arr1 = a.split("").sort();
  let arr2 = b.split("").sort();
  return (
    arr1.length == arr2.length &&
    arr1.every(function (v, i) {
      return v === arr2[i];
    })
  );
}
function fn(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = i;
    let t = [];
    for (let j = i; j < arr.length; j++) {
      if (isSame(arr[i], arr[j])) {
      } else {
        i = temp;
      }
    }
    result.push(t);
  }
  console.log(result);
}
// fn(arr);
// 哈希表

var groupAnagrams = function (strs) {
  if (!strs || !strs.length) return [];
  let map = {};
  for (const i of strs) {
    let item = [...i].sort().join();
    if (!map[item]) {
      map[item] = [i];
    } else {
      map[item].push(i);
    }
  }
  // console.log(Object.values(map));
};
var groupAnagrams = function (strs) {
  // 类似桶排序
  let counts = [];
  const hashTable = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    counts = Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      counts[str[j].charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    console.log(counts);

    const key = counts.join("");
    if (!hashTable[key]) {
      hashTable[key] = [str];
    } else {
      hashTable[key].push(str);
    }
  }
  console.log(hashTable);

  return Object.values(hashTable);
};
groupAnagrams(arr);
