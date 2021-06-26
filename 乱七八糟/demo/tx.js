// // const fn = (count, num) => {
// //   let res = 0;
// //   let ans;
// //   while (num / 3 == 0) {
// //     ans = num / 3;
// //     res++;
// //     console.log(res);
// //   }
// //   while (num / 2 == 0) {
// //     ans = num / 2;
// //     res++;
// //   }
// //   while (num - 1 == 0) {
// //     ans = num - 1;
// //     res++;
// //   }
// //   console.log(ans);
// //   return res;
// // };
// // fn(10);
// const numChar = {
//   零: 0,
//   一: 1,
//   二: 2,
//   三: 3,
//   四: 4,
//   五: 5,
//   六: 6,
//   七: 7,
//   八: 8,
//   九: 9,
// };
// const nameValue = {
//   十: { value: 10, secU: false },
//   百: { value: 100, secU: false },
//   千: { value: 1000, secU: false },
//   万: { value: 10000, secU: true },
//   亿: { value: 100000000, secU: true },
// };
// function fn(chnStr) {
//   let r = 0;
//   let rl = 0;
//   let number = 0;
//   let secU = false;
//   let str = chnStr.split("");
//   for (let i = 0; i < str.length; i++) {
//     let num = numChar && numChar[str[i]];
//     if (typeof num !== "undefined") {
//       number = num;
//       if (i === str.length - 1) {
//         rl += number;
//       }
//     } else {
//       let unit = nameValue && nameValue[str[i]].value;
//       secU = nameValue && nameValue[str[i]].secU;
//       if (secU) {
//         rl = (rl + number) * unit;
//         r += rl;
//         rl = 0;
//       } else {
//         rl += number * unit;
//       }
//       number = 0;
//     }
//   }
//   return r + rl;
// }

// // let res = fn("一千一百万");
// // console.log("res: " + res);
// //  全排列
// // solution("ab") => ["ab", "ba"]
// // solution("aabb") => ["aabb", "abab", "abba", "baab", "baba", "bbaa"]
// const fns = (str = "aabb") => {
//   let res = [];
//   if (str.length > 1) {
//     for (let i = 0; i < str.length; i++) {
//       let left = str[i];
//       let rest = str.slice(0, i) + str.slice(i + 1);
//       let presult = fns(rest);
//       for (let j = 0; j < presult.length; j++) {
//         let item = left + presult[j];
//         !res.includes(item) && res.push(item);
//       }
//     }
//   } else if (str.length === 1) res.push(str);
//   return res;
// };
// let ee = fns();
// console.log(ee);

// console.log("outer");
// setTimeout(() => {
//   setTimeout(() => {
//     console.log("setTimeout");
//   }, 0);
//   setImmediate(() => {
//     console.log("setImmediate");
//   });
// }, 0);
function fn(str = "ab") {
  let res = [];
  if (str.length > 1) {
    for (let i = 0; i < str.length; i++) {
      let left = str[i];
      let r = str.slice(0, i) + str.slice(i + 1);
      let rest = fn(r);
      for (let j = 0; j < rest.length; j++) {
        let item = left + rest[j];
        res.push(item);
      }
    }
  } else if (str.length === 1) res.push(str);
  return res;
}
let res = fn();
console.log(res);
