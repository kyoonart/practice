/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     if (!s) return 0
//     if (s.length === 1) return 1
//     let map = new Map()
//     let l = 0
//     let maxLength = 0
//     for (let r = 0; r < s.length; r++) {
//         const str = s[r]
//         if (map.has(str) && map.get(str) >= l) {
//             l = map.get(str) + 1
//         }
//         maxLength = Math.max(maxLength, r - l + 1)
//         map.set(str, r)
//     }
//     console.log(map);

//     return maxLength;
// };

var lengthOfLongestSubstring222 = function (s) {
  if (!s) return 0;
  if (s.length === 1) return 1;
  let map = new Map();
  let l = 0;
  let maxLength = 0;
  for (let r = 0; r < s.length; r++) {
    const str = s[r];
    if (map.has(str) && map.get(str) >= l) {
      l = map.get(str) + 1;
      console.log(l);
    }
    maxLength = Math.max(maxLength, r - l + 1);
    map.set(str, r);
  }
  console.log(map);
  return maxLength;
};
// let res = lengthOfLongestSubstring("abcab")
// console.log(res);

function lengthOfLongestSubstring(str) {
  if (str.length === 1) return 1;
  let maxLen = 0;
  let l = 0;
  let map = new Map();
  for (let r = 0; r < str.length; r++) {
    let val = str[r];
    if (map.has(val) && map.get(val) >= l) {
      l = map.get(val) + 1;
    }
    maxLen = Math.max(maxLen, r - l + 1);
    map.set(val, r);
  }
  return maxLen;
}
// let res = lengthOfLongestSubstring("abcab");
// console.log(res);

const lengthOfLongestSubstring2 = (str) => {
  let map = new Map();
  let start = 0;
  let maxLen = 0;
  for (let r = 0; r < str.length; r++) {
    let val = str[r];
    if (map.has(val) && map.get(val) >= 1) {
      start = map.get(val) + 1;
    }
    maxLen = Math.max(maxLen, r - start + 1);
    map.set(val, r);
  }
  return maxLen;
};
let res = lengthOfLongestSubstring2("pwwkew");
console.log(res);
//  解释
// https://mp.weixin.qq.com/s/rz2QtZFWKAS1hUmpp6HAzA
