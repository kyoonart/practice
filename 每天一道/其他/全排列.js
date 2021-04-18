// solution("ab") => ["ab", "ba"]
// solution("aabb") => ["aabb", "abab", "abba", "baab", "baba", "bbaa"]
const fns = (str = "aabb") => {
  let res = [];
  if (str.length > 1) {
    for (let i = 0; i < str.length; i++) {
      let left = str[i];
      let rest = str.slice(0, i) + str.slice(i + 1);
      let presult = fns(rest);
      for (let j = 0; j < presult.length; j++) {
        let item = left + presult[j];
        !res.includes(item) && res.push(item);
      }
    }
  } else if (str.length === 1) res.push(str);
  return res;
};

fns(list);

// let ee = fns();
// console.log(ee);
var arr = [1, 2, 3, 4]; //现实数组的全排列

// function permute(input) {
//   var permArr = [],
//     usedChars = [];
//   function main(input) {
//     var i, ch;
//     for (i = 0; i < input.length; i++) {
//       ch = input.splice(i, 1)[0];
//       usedChars.push(ch);
//       if (input.length == 0) {
//         permArr.push(usedChars.slice());
//       }
//       main(input);
//       input.splice(i, 0, ch);
//       usedChars.pop();
//     }
//     return permArr;
//   }
//   return main(input);
// }
// console.log(permute(arr));
var list = [
  ["热", "冷", "冰"],
  ["大", "中", "小"],
  ["重辣", "微辣"],
  ["重麻", "微麻"],
];
function compose(list) {
  var res = list.reduce((result, property) => {
    return property.reduce((acc, value) => {
      return acc.concat(result.map((ele) => [].concat(ele, value)));
    }, []);
  });
  return res.map((arr) => arr.join("+"));
}
// compose(list);
console.log(compose(list));

function compose(list) {
  let res = list.reduce((result, property) => {
    return property.reduce((acc, value) => {
      return acc.concat(result.map((ele) => [].concat(ele, value)));
    }, []);
  });
  return res.map((arr) => arr.join("+"));
}
