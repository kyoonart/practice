var merge = function (nums1, m, nums2, n) {
  const res = [];
  const arr1 = nums1.slice(0, m);
  const arr2 = nums2.slice(0, n);
  console.log(arr1, arr2);
  while (arr1.length >= 0 && arr2.length >= 0) {
    if (arr1[0] > arr2[0]) {
      res.push(arr2.shift());
    } else {
      res.push(arr1.shift());
    }
  }
  while (arr1.length) res.push(arr1.shift());
  while (arr2.length) res.push(arr2.shift());
  return res;
};
let r = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log('r', r);

/**、
 * 归并排序 合并连个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let index = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[index--] = nums1[i--];
    } else {
      nums1[index--] = nums2[j--];
    }
  }
  while (j >= 0) {
    nums1[index--] = nums2[j--];
  }
};
