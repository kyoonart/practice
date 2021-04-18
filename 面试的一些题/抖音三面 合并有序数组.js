// function mergeArr(arr1, arr2) {
//   let index1 = 0;
//   let index2 = 0;
//   let newArr = [];
//   while (index1 < arr1.length && index2 < arr2.length) {
//     if (arr1[index1] <= arr2[index2]) {
//       newArr.push(arr1.slice(index1)[0]);
//       index1++;
//     } else {
//       newArr.push(arr2.slice(index2)[0]);
//       index2++;
//     }
//   }
//   console.log(index1, index2);
//   return newArr.concat(
//     index1 < arr1.length ? arr1.slice(index1) : arr2.slice(index2)
//   );
// }
// let res = mergeArr([1, 3, 5], [2, 4, 6]);
// console.log(res);

// function mergeArr(arr1, arr2) {
//   let index1 = 0;
//   let index2 = 0;
//   let newArr = [];
//   while (index1 < arr1.length && index2 < arr2.length) {
//     if (arr1[index1] <= arr2[index2]) {
//       newArr.push(arr1.slice(index1)[0]);
//       index1++;
//     } else {
//       newArr.push(arr2.slice(index2)[0]);
//       index2++;
//     }
//   }
//   return newArr.concat(
//     index1 < arr1.length ? arr1.slice(index1) : arr2.slice(index2)
//   );
// }

// const merge = (arr1, arr2) => {
//   let i = 0;
//   let j = 0;
//   let res = [];
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       res.push(arr1[i]);
//       i++;
//     } else {
//       res.push(arr2[j]);
//       j++;
//     }
//   }
//   if (i === arr1.length) {
//     res = res.concat(arr2.slice(j, arr2.length));
//   } else {
//     res = res.concat(arr1.slice(j, arr1.length));
//   }
//   console.log(res);
// };
// merge([1, 3], [2, 4, 6]);

function merge(arr1, arr2) {
  let res = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] <= arr2[0]) {
      res.push(arr1.shift());
    } else {
      res.push(arr2.shift());
    }
  }
  while (arr1.length) res.push(arr1.shift());
  while (arr2.length) res.push(arr2.shift());

  console.log(res);
  return res;
}

// function merge(left, right) {
//   let res = [];
//   while (left.length > 0 && right.length > 0) {
//     if (left[0] < right[0]) res.push(left.shift());
//     else res.push(right.shift());
//   }
//   while (left.length) res.push(left.shift());
//   while (right.length) res.push(right.shift());
//   console.log(res);
//   return res;
// }
merge([1, 3, 6, 7673], [2, 4, 6]);
