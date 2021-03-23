// 思想 快速排序的基本思想:通过一趟排序将待排记录分隔成独立的两部分,
//其中一部分记录的关键字均比另一部分的关键字小,则可分别对这两部分记录继续进行排序,
//以达到整个序列有序。
function quickSort(arr) {
  //终止条件
  if (arr.length <= 1) {
    return arr;
  }
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

let arr = [1, 0, 3, 10, 6, 4, -5];
console.log(quickSort(arr));
// 不需要额外的空间版本
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
console.log(quickSort1(arr));
// 优化思路 不要选择第一个数作为排序的中轴
// 1： 随机数 2：三平均法  第一个 最后一个
//  中间的那个 相加取平均数

function quicksort(arr, low = 0, high = arr.length - 1) {
  let left = low;
  let right = high;
  let flag = arr[left];
  while (left < right) {
    if (left < right && arr[right] >= arr[left]) right--;
    arr[left] = arr[right];
    if (left < right && arr[left] >= arr[right]) left++;
    arr[right] = arr[left];
  }
  arr[left] = flag;
  quicksort(arr, low, left - 1);
  quicksort(arr, left + 1, right);
  return arr;
}
