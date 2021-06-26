function fn(target) {
  if (target === 0 || target === 1) return target;
  let left = 1;
  let right = target;
  while (left <= right) {
    let mid = Math.floor((left + right) >> 1);
    // let mid = left + ((right - left) >> 1);
    if (mid * mid === target) return mid;
    else if (mid * mid > target) right = mid - 1;
    else left = mid + 1;
  }
  return right;
}
let r = fn(8);
console.log(r);
