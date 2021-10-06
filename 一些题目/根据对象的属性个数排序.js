var arr = [
  { id: 1 },
  { a: 1, b: 1, c: 1, id: 5 },
  { a: 1, id: 6 },
  { a: 1, b: 1, id: 3 },
];
function getObjCount(obj) {
  let count = 0;
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      obj.hasOwnProperty(key) && count++;
    }
  }
  return count;
}
function sortFn(a, b) {
  return getObjCount(a) - getObjCount(b);
}
// console.log(arr.sort(sortFn));

function sortfn(a, b) {
  return a.id - b.id;
}
console.log(arr.sort(sortfn));
console.log(arr.sort((a, b) => a.id - b.id));
