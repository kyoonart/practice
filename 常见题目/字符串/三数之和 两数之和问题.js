function twoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let temp = target - arr[i];
    if (map.has(temp)) {
      return [map.get(temp), i];
    } else {
      map.set(arr[i], i);
    }
  }
}

let res = twoSum([1, 2, 3, 4, 5], 7);
console.log("res = ", res);

function threeSum(arr) {
  let result = [];
  let newarr = arr.sort((a, b) => a - b);
  for (let i = 0; i < newarr.length; i++) {
    if (i >= 0 && newarr[i] === newarr[i - 1]) continue;
    let j = i + 1;
    let k = newarr.length - 1;
    while (j < k) {
      let sum = newarr[i] + newarr[j] + newarr[k];
      if (sum === 0) {
        result.push([newarr[i], newarr[j], newarr[k]]);
        j++;
        while (newarr[j] === newarr[j - 1]) {
          j++;
        }
      } else if (sum < 0) j++;
      else k--;
    }
  }
  return result;
}

let ress = threeSum([1, 2, 4, -6]);
console.log("ress", ress);
// 类似的 四数之和 甚至五数之和 都可以用这个思路
// 双指针
