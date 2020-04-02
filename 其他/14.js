var findKthLargest = function(nums, k) {
    for (let i = 0, len = nums.length; i < len; i++) {
        for (let j = 0, tmp; j < len; j++) {
            if (nums[j] > nums[j + 1]) {
                tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp
            }
        }
        if (i === len - k) {
            return nums[i]
            break
        }
    }
};
var nums = [7, 6, 5, 4, 3, 2, 1]
findKthLargest(nums, 5)