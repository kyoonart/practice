// console.log(arr.constructor == Array);
let arr = [1, 3, 4, 4, 5, 5]
    // for (let i of arr) {
    //     // console.log(arr[i]);
    //     console.log(i);
    // }
function unique(arr) {
    var result = [];
    for (let index = 0; index < arr.length; index++) {
        if (result.indexOf(arr[index]) == -1)
            result.push(arr[index])
    }
    return result;
}
console.log(unique(arr));