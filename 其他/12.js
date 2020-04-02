// leetcode 最大间距
// 根据冒泡排序原理知道 每次最大值都会排到最后，所以当排序完成一次时就可以找间距了  省略要把数组先排序再进行寻找间距 省略一次for循环
var maximumGap = function(nums) {
    if (nums.length < 2)
        return 0;
    let max = 0;
    for (let i = 0, len = nums.length, tmp; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (nums[j] > nums[j + 1]) {
                tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp
            }
        }
        if (i > 0) {
            if (nums[len - i] - nums[len - i - 1] > max) {
                max = nums[len - i] - nums[len - i - 1];
            }
        }

    }
    return max;
};