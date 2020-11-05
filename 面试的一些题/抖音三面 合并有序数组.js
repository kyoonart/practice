function mergeArr(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    let newArr = [];
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] <= arr2[index2]) {
            newArr.push(arr1.slice(index1)[0]);
            index1++
        } else {
            newArr.push(arr2.slice(index2)[0])
            index2++
        }
    }
    return newArr.concat((index1 < arr1.length) ? arr1.slice(index1) : arr2.slice(index2))
}
let res = mergeArr([1, 3, 5], [2, 4, 6])
console.log(res)