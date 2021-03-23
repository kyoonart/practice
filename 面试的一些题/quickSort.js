function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let flag = arr.shift();
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > flag) {
      right.push(arr[i]);
    }
    if (arr[i] < flag) {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat(flag, quickSort(right));
}
let arrs = [1, 3, 4, 75, 457, 2, 32, , 323, 2];

console.log(quickSort(arrs));

function _quickSort(arr, low = 0, high = arr.length - 1) {
  if (low >= high) return;
  let left = low;
  let right = high;
  let flag = arr[left];
  while (left < right) {
    if (left < right && arr[right] >= flag) {
      right--;
    }
    arr[left] = arr[right];
    if (left < right && arr[left] <= flag) {
      left++;
    }
    arr[right] = arr[left];
  }
  arr[left] = flag;
  _quickSort(arr, low, left - 1);
  _quickSort(arr, left + 1, high);
  return arr;
}

function quickSort1(arr, low = 0, high = arr.length - 1) {
  if (low >= high) return;
  let left = low;
  let right = high;
  let flag = arr[left];
  while (left < right) {
    // 从右边尝试寻找一个比flag小的、比flag大、right左移
    if (left < right && arr[right] >= flag) right--;
    arr[left] = arr[right];
    if (left < right && arr[left] <= flag) left++;
    arr[right] = arr[left];
  }
  arr[left] = flag;
  quickSort1(arr, low, left - 1);
  quickSort1(arr, left + 1, high);
  return arr;
}
// console.log(quickSort1(arrs));
function quickSort1(arr, low = 0, high = arr.length - 1) {
  if (low >= high) return;
  let left = low;
  let right = high;
  let temp = arr[left];
  while (left < right) {
    if (left < right && temp <= arr[right]) {
      right--;
    }
    arr[left] = arr[right];
    if (left < right && temp >= arr[left]) {
      left++;
    }
    arr[right] = arr[left];
  }
  arr[left] = temp;
  quickSort1(arr, low, left - 1);
  quickSort1(arr, left + 1, high);
  return arr;
}

function quickSort2(arr, low = 0, high = arr.length - 1) {
  if (low >= high) return;
  let left = low;
  let right = high;
  let temp = arr[left];

  while (left < right) {
    if (left < right && arr[right] >= temp) {
      right--;
    }
    arr[left] = arr[right];
    if (left < right && arr[left] <= temp) {
      left++;
    }
    arr[right] = arr[left];
  }
  arr[left] = temp;
  quickSort2(arr, low, left - 1);
  quickSort2(arr, left + 1, high);
  return arr;
}
console.log(quickSort2([11, 4, 3, 6, 1, 9, 7, 2, 0]));
