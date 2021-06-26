// var findRepeatNumber = function(nums) {
//     let res = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (!(nums[i] in res)) {
//             res[nums[i]] = 1;
//         } else {
//             res[nums[i]]++;
//         }
//     }
//     for (const key in res) {
//         if (res.hasOwnProperty(key)) {
//             if (res[key] > 1) {
//                 return key;
//             }

//         }
//     }
// };
// findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
//     // 或者
// var findRepeatNumber = function(nums) {
//     let s = new Set();
//     for (var i in nums) {
//         var curLenth = s.size;
//         s.add(nums[i]);
//         if (s.size == curLenth)
//             return nums[i];
//     }
// };
var findRepeatNumber = function(nums) {
    const map = {};
    for (const num of nums) {
        if (!map[num]) {
            map[num] = true
        } else {
            return num;
        }
    }
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 3, 3, 3, 3, 3, 35, 3]));