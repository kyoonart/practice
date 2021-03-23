const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (target === arr[mid]) {
      return `找到了${target},在第${mid + 1}个`;
    }
    if (target > arr[mid]) {
      low = mid + 1;
    } else if (target < arr[mid]) {
      high = mid - 1;
    }
  }
  return;
};

// 递归版本
const binarySearch1 = (arr, target, low = 0, high = arr.length - 1) => {
  const mid = Math.floor((low + high) / 2);
  const cur = arr[mid];
  if (target === arr[mid]) {
    return `找到了${target},在第${mid + 1}个`;
  }
  if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, high);
  }
  if (target < arr[mid]) {
    return binarySearch(arr, target, low, mid - 1);
  }
  return;
};
console.log(
  binarySearch1([1, 2, 3, 4, 5, 7, 9, 11, 14, 16, 17, 22, 33, 55, 65], 4)
);
