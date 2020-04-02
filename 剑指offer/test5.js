// function GetLeastNumbers_Solution(input, k) {
//     // write code here
//     if (input.length == 0 || k == 0 || input.length < k) {
//         return [];
//     }
//     input.sort((a, b) => {
//         return a - b
//     })
//     return input.slice(0, k)
// }
// let arr = GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 4)
// console.log(arr);
function FindGreatestSumOfSubArray(array) {
    if (array.length < 0)
        return 0;
    var sum = array[0],
        tempsum = array[0];
    for (var i = 1; i < array.length; i++) {
        tempsum = tempsum < 0 ? array[i] : tempsum + array[i];
        sum = tempsum > sum ? tempsum : sum;
    }
    return sum;
}