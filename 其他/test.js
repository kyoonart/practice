// function FindKthToTail(head, k) {
//     if (head === null || k <= 0) return null;
//     let pNode1 = head,
//         pNode2 = head;
//     while (--k) {
//         if (pNode2.next !== null) {
//             pNode2 = pNode2.next;
//         } else {
//             return null;
//         }
//     }
//     while (pNode2.next !== null) {
//         pNode1 = pNode1.next;
//         pNode2 = pNode2.next;
//     }
//     return pNode1;
// }
// var arr = [2, 5, 3];
// var acc = [1, 5, 3]
// console.log(arr.concat(100, acc));

// function quickSort(arr, low, high) {
//     var key = arr[low];
//     var start = low;
//     var end = high;
//     while (end > start) {
//         while (end > start && arr[end] >= key) end--;
//         if (arr[end] < key) {
//             var temp = arr[end];
//             arr[end] = arr[start];
//             arr[start] = temp;
//         }
//         while (end > start && arr[start] <= key) start++;
//         if (arr[start] > key) {
//             var temp = arr[start];
//             arr[start] = arr[end];
//             arr[end] = temp;
//         }
//     }
//     console.log('newArr:' + arr);
//     if (start > low + 1) { quickSort(arr, low, start - 1) };
//     if (end < high - 1) { quickSort(arr, end + 1, high) };
//     return arr;
// // }
// let a = {
//     age: 1,
//     jobs: {
//         first: 'FE'
//     }
// }
// a.jobs.first = 'native';
// let b = JSON.parse(JSON.stringify(a))

// console.log(b) // FE

// console.log(a instanceof Object);
console.log(9007199254740995 n);