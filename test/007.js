// function unique(arr) {
//   let result = [];
//   arr.forEach((item) => {
//     !result.includes(item) && result.push(item);
//   });
//   console.log(result);
// }

function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
  // console.log(result);
}
let arr = [1, 1, 12, 4242, 4242];
console.log(unique(arr));
