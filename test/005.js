// let map = new Map();
// map.set("a", 11);
// map.set("v", 11);
// map.set("x", 11);
// console.log(map);

function shiffle(arr) {
  for (var i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * (arr.length - 1 - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  console.log(arr);
}
shiffle([1, 2, 3, 4, 5]);
