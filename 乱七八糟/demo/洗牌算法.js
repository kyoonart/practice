function fn(arr) {
  let len = arr.length;
  for (var i = 0; i < arr.length; i++) {
    let ran = Math.floor(Math.random() * (len - i));
    [arr[ran], arr[len - i - 1]] = [arr[len - i - 1], arr[ran]];
  }
  console.log(arr);
}
fn([1, 5, 5, 743, 74, 6, 8, 9]);
