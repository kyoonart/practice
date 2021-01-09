const deleteItem = (arr, target) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === target) {
      arr.splice(i, 1);
      i--;
      len--;
    }
  }
  return arr;
};
const deleteItem1 = (arr, target) => arr.filter((item) => item !== target);
let res = deleteItem1([1, 2, 3], 2);
console.log(res);
